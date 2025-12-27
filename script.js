document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");

    // Load 3D background component
    console.log("Fetching 3d-background.html...");
    fetch('/3d-background.html')
        .then(res => {
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.text();
        })
        .then(text => {
            let oldelem = document.querySelector("script#replace_with_3d_background");
            if (oldelem) {
                let newelem = document.createElement("div");
                newelem.innerHTML = text;
                oldelem.parentNode.replaceChild(newelem, oldelem);
                console.log("3D background component loaded.");
            }
        })
        .catch(error => {
            console.error("Error loading 3D background:", error);
        });

    // Load navigation and attach menu listeners
    console.log("Fetching navigation.html...");
    fetch('/navigation.html')
        .then(res => {
            console.log("Fetch response received.");
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.text();
        })
        .then(text => {
            console.log("Navigation HTML content received.");
            let oldelem = document.querySelector("script#replace_with_navbar");
            if (oldelem) {
                console.log("Found script#replace_with_navbar. Replacing it now.");
                let newelem = document.createElement("div");
                newelem.innerHTML = text;
                oldelem.parentNode.replaceChild(newelem, oldelem);
                console.log("Navigation HTML injected.");

                // --- Hamburger Menu ---
                const hamburgerMenu = document.querySelector('.hamburger-menu');
                const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
                const closeBtn = document.querySelector('.close-btn');

                console.log("Attempting to find menu elements...");
                console.log("hamburgerMenu:", hamburgerMenu);
                console.log("mobileNavOverlay:", mobileNavOverlay);
                console.log("closeBtn:", closeBtn);

                if (hamburgerMenu && mobileNavOverlay && closeBtn) {
                    console.log("All menu elements found. Attaching listeners.");
                    hamburgerMenu.addEventListener('click', () => {
                        console.log("Hamburger menu clicked!");
                        mobileNavOverlay.classList.add('active');
                    });

                    closeBtn.addEventListener('click', () => {
                        console.log("Close button clicked!");
                        mobileNavOverlay.classList.remove('active');
                    });
                    console.log("Listeners attached.");
                } else {
                    console.error("One or more menu elements were not found in the DOM.");
                }
            } else {
                console.error("Could not find script#replace_with_navbar to replace.");
            }
        })
        .catch(error => {
            console.error("Error fetching or processing navigation.html:", error);
        });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.animate-fade-in').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        observer.observe(element);
    });

    // Smooth scroll for navigation using event delegation
    document.body.addEventListener('click', function(e) {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            const targetElement = document.querySelector(e.target.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });

    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');

        // Asignar el tamaño del canvas para que coincida con el de su contenedor
        const card = document.querySelector('.particle-card');
        if (card) {
            canvas.width = card.offsetWidth;
            canvas.height = card.offsetHeight;

            // --- CONFIGURACIÓN DE LA ANIMACIÓN ---
            const numberOfParticles = 100; // Número de partículas
            const connectDistance = 30;    // Distancia máxima para conectar partículas
            const mouseRepelRadius = 100;  // Radio de repulsión del mouse
            
            // Paleta de colores fluorescentes
            const colors = [
                '#39ff14', // Verde neón
                '#6644ffff', // Rojo neón
                '#2db6ffff', // Cian neón
                '#e74bffff', // Magenta neón
                '#f5b300'  // Amarillo neón
            ];
            // ------------------------------------

            let particlesArray = [];

            // Objeto para almacenar la posición del mouse
            const mouse = {
                x: null,
                y: null,
            };

            // Event listener para actualizar la posición del mouse
            canvas.addEventListener('mousemove', (event) => {
                const rect = canvas.getBoundingClientRect();
                mouse.x = event.clientX - rect.left;
                mouse.y = event.clientY - rect.top;
            });

            // Resetear la posición del mouse cuando sale del canvas
            canvas.addEventListener('mouseleave', () => {
                mouse.x = null;
                mouse.y = null;
            });

            // Clase para crear cada partícula
            class Particle {
                constructor(x, y, directionX, directionY, size, color) {
                    this.x = x;
                    this.y = y;
                    this.directionX = directionX;
                    this.directionY = directionY;
                    this.size = size;
                    this.color = color;
                    this.baseX = this.x; // Guardar posición original para efectos futuros
                    this.baseY = this.y;
                    this.speed = 1;
                }

                // Método para dibujar la partícula en el canvas
                draw() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                    ctx.fillStyle = this.color;
                    ctx.fill();
                }

                // Método para actualizar la posición de la partícula en cada frame
                update() {
                    // Revisa colisión con los bordes del canvas
                    if (this.x > canvas.width || this.x < 0) {
                        this.directionX = -this.directionX;
                    }
                    if (this.y > canvas.height || this.y < 0) {
                        this.directionY = -this.directionY;
                    }

                    // Lógica de repulsión del mouse
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouseRepelRadius) {
                        // Mueve la partícula en la dirección opuesta al mouse
                        this.x -= (dx / distance) * 3;
                        this.y -= (dy / distance) * 3;
                    } else {
                         // Movimiento normal
                        this.x += this.directionX * this.speed;
                        this.y += this.directionY * this.speed;
                    }

                    this.draw();
                }
            }

            // Función para inicializar el array de partículas
            function init() {
                particlesArray = [];
                for (let i = 0; i < numberOfParticles; i++) {
                    let size = Math.random() * 2.5 + 1; // Tamaño entre 1 y 3.5
                    let x = Math.random() * canvas.width;
                    let y = Math.random() * canvas.height;
                    let directionX = (Math.random() * 0.4) - 0.2; // Movimiento lento en X
                    let directionY = (Math.random() * 0.4) - 0.2; // Movimiento lento en Y
                    let color = colors[Math.floor(Math.random() * colors.length)];
                    
                    particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
                }
            }

            // Función para dibujar las líneas de conexión entre partículas
            function connect() {
                let opacityValue = 1;
                for (let a = 0; a < particlesArray.length; a++) {
                    for (let b = a; b < particlesArray.length; b++) {
                        let dx = particlesArray[a].x - particlesArray[b].x;
                        let dy = particlesArray[a].y - particlesArray[b].y;
                        let distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < connectDistance) {
                            opacityValue = 1 - (distance / connectDistance);
                            ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue})`;
                            ctx.lineWidth = 0.5;
                            ctx.beginPath();
                            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                            ctx.stroke();
                        }
                    }
                }
            }

            // Bucle de animación
            function animate() {
                // Un fondo semitransparente crea un efecto de estela (trailing)
                ctx.fillStyle = 'rgba(231, 231, 231, 0.75)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                for (let i = 0; i < particlesArray.length; i++) {
                    particlesArray[i].update();
                }
                
                connect();
                
                requestAnimationFrame(animate); // Llama a la función en un bucle continuo
            }
            
            // Manejo de redimensionamiento de la ventana
            window.addEventListener('resize', () => {
                canvas.width = card.offsetWidth;
                canvas.height = card.offsetHeight;
                init(); // Reinicia las partículas para el nuevo tamaño
            });

            // Iniciar la animación
            init();
            animate();
        }
    }
});