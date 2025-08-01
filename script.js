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

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Load navigation
fetch('/navigation.html')
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector("script#replace_with_navbar");
        let newelem = document.createElement("div");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem,oldelem);
    })









    // Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');

    // Asignar el tamaño del canvas para que coincida con el de su contenedor
    const card = document.querySelector('.particle-card');
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
});