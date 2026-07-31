import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { ArrowLeft } from 'lucide-react';
import Contact from '../components/Contact';

export default function ArticleDetail() {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      setLoading(true);
      try {
        // Try english first
        let res = await fetch(`/blogs/${slug}.en.md`);
        if (!res.ok) {
          // Fallback to spanish
          res = await fetch(`/blogs/${slug}.es.md`);
        }
        if (!res.ok) {
           // Fallback to no lang
           res = await fetch(`/blogs/${slug}.md`);
        }
        if (res.ok) {
          const text = await res.text();
          setContent(text);
        } else {
          setContent('# Error\nCould not load the article.');
        }
      } catch (err) {
        setContent('# Error\nFailed to fetch article.');
      } finally {
        setLoading(false);
      }
    }
    fetchBlog();
  }, [slug]);

  return (
    <>
      <article className="min-h-screen bg-slate-50 py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/articles" className="inline-flex items-center text-cloud-blue hover:text-blue-700 transition-colors mb-8 font-semibold">
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Articles
          </Link>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 prose prose-slate max-w-none prose-img:rounded-xl">
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-slate-200 rounded"></div>
                    <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            ) : (
              <Markdown 
                rehypePlugins={[rehypeRaw]}
                components={{
                  img: ({ node, ...props }) => {
                    let src = props.src || '';
                    if (src && !src.startsWith('/') && !src.startsWith('http')) {
                      src = '/' + src.replace(/^\.\//, '');
                    }
                    return <img {...props} src={src} className="rounded-xl shadow-md my-6 max-h-[500px] object-cover mx-auto" />;
                  }
                }}
              >
                {content}
              </Markdown>
            )}
          </div>
        </div>
      </article>
      <Contact />
    </>
  );
}