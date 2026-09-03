import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { ArrowLeft, Globe } from 'lucide-react';
import Contact from '../components/Contact';

// Load all markdown files at build time via Vite
const blogModules = import.meta.glob('../blogs/*.md', { query: '?raw', import: 'default', eager: true });

// Normalize slugs and handle historical aliases
const SLUG_ALIASES = {
  'unet': 'blog_vfx_pipeline',
  'deadline_cloud': 'blog_deadline_cloud',
  'ayon': 'blog_ayon',
  'studio_cloud': 'blog_studio_cloud',
  'linux': 'blog_linux'
};

export default function ArticleDetail() {
  const { slug } = useParams();
  const [lang, setLang] = useState('en');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  const normalizedSlug = SLUG_ALIASES[slug] || slug;

  // Determine available languages for this slug
  const hasEn = Boolean(
    blogModules[`../blogs/${normalizedSlug}.en.md`] || 
    blogModules[`../blogs/${normalizedSlug}.md`]
  );
  const hasEs = Boolean(
    blogModules[`../blogs/${normalizedSlug}.es.md`]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    setLoading(true);

    // 1. Try resolving from bundled Vite modules
    let text = '';
    if (lang === 'en') {
      text = blogModules[`../blogs/${normalizedSlug}.en.md`] || 
             blogModules[`../blogs/${normalizedSlug}.md`] || 
             blogModules[`../blogs/${normalizedSlug}.es.md`];
    } else {
      text = blogModules[`../blogs/${normalizedSlug}.es.md`] || 
             blogModules[`../blogs/${normalizedSlug}.en.md`] || 
             blogModules[`../blogs/${normalizedSlug}.md`];
    }

    if (text) {
      setContent(text);
      setLoading(false);
      return;
    }

    // 2. Fallback to runtime fetch if not found in bundle
    async function fallbackFetch() {
      try {
        const langOrder = lang === 'en' 
          ? [`/blogs/${normalizedSlug}.en.md`, `/blogs/${normalizedSlug}.md`, `/blogs/${normalizedSlug}.es.md`]
          : [`/blogs/${normalizedSlug}.es.md`, `/blogs/${normalizedSlug}.en.md`, `/blogs/${normalizedSlug}.md`];

        for (const path of langOrder) {
          try {
            const res = await fetch(path);
            const contentType = res.headers.get('content-type') || '';
            // Ensure response is actual markdown/text, not HTML SPA fallback
            if (res.ok && !contentType.includes('text/html')) {
              const fetchedText = await res.text();
              if (fetchedText && !fetchedText.startsWith('<!doctype html>')) {
                setContent(fetchedText);
                setLoading(false);
                return;
              }
            }
          } catch {
            // continue fallback loop
          }
        }

        setContent('# Article Not Found\n\nThe requested article or case study could not be loaded.');
      } catch {
        setContent('# Error\n\nFailed to load article content.');
      } finally {
        setLoading(false);
      }
    }

    fallbackFetch();
  }, [normalizedSlug, lang]);

  return (
    <>
      <article className="min-h-screen bg-slate-50 py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Top Bar: Back Link & Language Switcher */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <Link 
              to="/articles" 
              className="inline-flex items-center text-cloud-blue hover:text-blue-700 transition-colors font-semibold text-sm"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              <span>Back to Case Studies & Articles</span>
            </Link>

            {/* Language Toggle Pill (if multiple languages available) */}
            {hasEn && hasEs && (
              <div className="inline-flex items-center gap-1.5 p-1 rounded-xl bg-white border border-slate-200 shadow-sm text-xs mono-text">
                <Globe className="w-3.5 h-3.5 text-slate-400 ml-1.5" />
                <button
                  onClick={() => setLang('en')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition-colors cursor-pointer ${
                    lang === 'en' 
                      ? 'bg-slate-900 text-white shadow-xs' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang('es')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition-colors cursor-pointer ${
                    lang === 'es' 
                      ? 'bg-slate-900 text-white shadow-xs' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  ES
                </button>
              </div>
            )}
          </div>

          {/* Article Container */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-6 sm:p-10 md:p-14 prose prose-slate max-w-none prose-headings:font-title prose-headings:font-bold prose-h1:text-3xl sm:prose-h1:text-4xl prose-h2:text-2xl prose-img:rounded-2xl prose-img:shadow-md prose-a:text-cloud-blue hover:prose-a:text-blue-700">
            {loading ? (
              <div className="animate-pulse space-y-6 py-4">
                <div className="h-8 bg-slate-200 rounded-xl w-3/4"></div>
                <div className="h-4 bg-slate-200 rounded-lg w-1/2"></div>
                <div className="h-48 bg-slate-100 rounded-2xl w-full my-6"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-slate-200 rounded w-full"></div>
                  <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                  <div className="h-4 bg-slate-200 rounded w-4/6"></div>
                </div>
              </div>
            ) : (
              <Markdown 
                rehypePlugins={[rehypeRaw]}
                components={{
                  img: ({ ...props }) => {
                    let src = props.src || '';
                    if (src && !src.startsWith('/') && !src.startsWith('http')) {
                      src = '/' + src.replace(/^\.\.\//, '').replace(/^\.\//, '');
                    }
                    return (
                      <img 
                        {...props} 
                        src={src} 
                        className="rounded-2xl shadow-lg my-8 max-h-[550px] w-full object-cover border border-slate-100" 
                        loading="lazy"
                      />
                    );
                  },
                  a: ({ href, children, ...props }) => {
                    const isExternal = href?.startsWith('http') || href?.includes('vectorescope.com');
                    return (
                      <a
                        {...props}
                        href={href}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noopener noreferrer' : undefined}
                      >
                        {children}
                      </a>
                    );
                  }
                }}
              >
                {content}
              </Markdown>
            )}
          </div>

          {/* Bottom Navigation */}
          <div className="mt-10 flex justify-between items-center">
            <Link 
              to="/articles" 
              className="inline-flex items-center px-6 py-3 bg-white hover:bg-slate-100 text-slate-800 font-semibold rounded-2xl border border-slate-200 shadow-sm transition-all text-xs uppercase tracking-wider"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              <span>All Articles & Case Studies</span>
            </Link>

            <Link 
              to="/vfx" 
              className="inline-flex items-center px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-2xl shadow-sm transition-all text-xs uppercase tracking-wider"
            >
              <span>VFX Infrastructure</span>
            </Link>
          </div>

        </div>
      </article>

      <Contact />
    </>
  );
}