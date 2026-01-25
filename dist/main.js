// Content data for each section
        const contentData = [
            {
                title: "Nuestra Filosofía",
                text: "Descansar bien no es un lujo, sino la base para vivir mejor y parte de la idea de que cada día puede comenzar con el pie derecho cuando el cuerpo y la mente encuentran verdadero equilibrio durante la noche.",
                image: "assets/sec1-sheeps.jpg"
            },
            {
                title: "Misión",
                text: "Nuestra misión es proporcionar productos de descanso de la más alta calidad que transformen la forma en que las personas duermen, mejorando su bienestar físico y mental a través de soluciones innovadoras y accesibles.",
                image: "assets/sec1-mision.png"
            },
            {
                title: "Visión",
                text: "Aspiramos a ser líderes en la industria del descanso, reconocidos por nuestra innovación constante y compromiso con la excelencia, ayudando a millones de personas a descubrir el poder transformador de un sueño reparador.",
                image: "assets/sec1-bed.png"
            }
        ];

        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });

        // Observe section
        const section = document.querySelector('.section-1');
        observer.observe(section);

        // Toggle function with animations
        function sec1_toggle(index) {
            const title = document.getElementById('sec1-title');
            const text = document.getElementById('sec1-text');
            const img = document.getElementById('sec1-img');
            
            // Remove selected class from all buttons
            document.querySelectorAll('.button-link .button').forEach(btn => {
                btn.classList.remove('selected');
            });
            
            // Add selected class to clicked button
            document.getElementById(`sec1-b${index}`).classList.add('selected');
            
            // Fade out current content
            title.classList.add('fade-out');
            text.classList.add('fade-out');
            img.classList.add('fade-out');
            
            // Wait for fade out, then update content and fade in
            setTimeout(() => {
                title.textContent = contentData[index].title;
                text.textContent = contentData[index].text;
                img.src = contentData[index].image;
                
                // Remove fade-out class to trigger fade-in
                setTimeout(() => {
                    title.classList.remove('fade-out');
                    text.classList.remove('fade-out');
                    img.classList.remove('fade-out');
                }, 50);
            }, 400);
        }


// const sec1_titles = ["Nuestra Filosofía", "Misión", "Visión"];
// const sec1_images = ["sec1-sheeps.jpg", "sec1-mision.png", "sec1-bed.png"];
// const sec1_alt = [
//   "Imagen de horda de ovejas blancas con una oveja negra",
//   "Imagen de horda de maquina de coser moderna",
//   "Imagen de cuarto moderno con una cama arreglada en el centro"
// ];

// const sec1_text = [
//   "Descansar bien no es un lujo, sino la base para vivir mejor y parte de la idea de que cada día puede comenzar con el pie derecho cuando el cuerpo y la mente encuentran verdadero equilibrio durante la noche.",
//   "Ofrecer mucho más que un colchón: una nueva forma de descansar. Creemos que empezar el día con el “pie derecho” hace la diferencia, por eso diseñamos cada colchón con tecnología avanzada, materiales de alto rendimiento y una comodidad pensada para ayudar a las personas a despertar renovadas, con el cuerpo y la mente en equilibrio.",
//   "Aspiramos a transformar la manera en que los salvadoreños descansan, brindándoles la oportunidad de reiniciar su cuerpo y su mente cada noche. Visualizamos una experiencia de descanso que, con el tiempo, eleve la salud, rejuvenezca el cuerpo y se integre de forma natural en un estilo de vida refinado, estableciendo un nuevo estándar de confort y calidad del sueño."
// ];

// function sec1_toggle(target) {
//   const img = document.getElementById("sec1-img");
//   const text = document.getElementById("sec1-text");

//   // Fade out
//   img.classList.add("sec1-fade-out");
//   text.classList.add("sec1-fade-out");

//   // Swap after fade out finishes
//   setTimeout(() => {
//     img.src = `./assets/${sec1_images[target]}`;
//     img.alt = sec1_alt[target];
//     text.textContent = sec1_text[target];

//     // Title
//     document.getElementById("sec1-title").textContent = sec1_titles[target]

//     // Buttons
//     document.getElementById("sec1-b0").classList.remove("selected");
//     document.getElementById("sec1-b1").classList.remove("selected");
//     document.getElementById("sec1-b2").classList.remove("selected");
//     document.getElementById(`sec1-b${target}`).classList.add("selected");

//     // Fade back in
//     img.classList.remove("sec1-fade-out");
//     text.classList.remove("sec1-fade-out");
//   }, 180);
// }



 var layersData = [
            {
                name: "Vista Completa",
                description: "En ONIX, diseño y tecnología se unen para crear un colchón que respira, se adapta y te restaura mientras dormís.",
                badge: "Vista General",
                bullets: null
            },
            {
                name: "CoolTouch Advanced Regulated Stretch Knit",
                badge: "Capa 1 de 6",
                bullets: [
                    "Tecnología transpirable al tacto que ayuda a evitar la acumulación de calor",
                    "Mantiene la superficie fresca y transpirable",
                    "Aporta una sensación de suavidad y lujo"
                ]
            },
            {
                name: "Espuma de Confort Transpirable (2\")",
                badge: "Capa 2 de 6",
                bullets: [
                    "Se amolda al cuerpo sin hundirse",
                    "Reduce puntos de presión",
                    "Favorece la circulación del aire"
                ]
            },
            {
                name: "Espuma Especial de Soporte (1.5\")",
                badge: "Capa 3 de 6",
                bullets: [
                    "Refuerza las zonas clave del cuerpo",
                    "Mejora la postura y la alineación de la columna",
                    "Evita el hundimiento al sentarse en los bordes"
                ]
            },
            {
                name: "Látex Firme 100% Orgánico (1.5\")",
                badge: "Capa 4 de 6",
                bullets: [
                    "Mantiene la postura sin hundimientos",
                    "Respuesta elástica que acompaña el movimiento",
                    "Material natural, hipoalergénico y resistente"
                ]
            },
            {
                name: "Resortes Pocket Coil Serie 900",
                badge: "Capa 5 de 6",
                bullets: [
                    "Resortes embolsados individualmente",
                    "Soporte específico en hombros, caderas y espalda",
                    "Minimiza la transferencia de movimiento entre individuos"
                ]
            },
            {
                name: "Espuma de Confort Firme (0.75\")",
                badge: "Capa 6 de 6",
                bullets: [
                    "Aporta firmeza y estabilidad",
                    "Previene deformaciones con el tiempo",
                    "Refuerza las zonas de mayor peso"
                ]
            }
        ];

        var currentLayer = 0;
        var layerImages = document.querySelectorAll('.layer-img');
        var prevBtn = document.getElementById('prevBtn');
        var nextBtn = document.getElementById('nextBtn');
        var layerTitle = document.getElementById('layerTitle');
        var layerDescription = document.getElementById('layerDescription');
        var layerBadge = document.getElementById('layerBadge');
        var progressIndicator = document.getElementById('progressIndicator');
        var layerBullets = document.getElementById('layerBullets');
        var isAnimating = false;

        // Create progress dots
        for (var i = 0; i < layersData.length; i++) {
            var dot = document.createElement('div');
            dot.className = 'progress-dot';
            if (i === 0) dot.classList.add('active');
            progressIndicator.appendChild(dot);
        }

        function updateLayers() {
            if (isAnimating) return;
            isAnimating = true;

            var separation = 70;
            var stackedSpacing = 35;
            
            layerImages.forEach(function(img, index) {
                var layerIndex = index + 1;
                var totalLayers = layerImages.length;
                
                if (currentLayer === 0) {
                    var centerOffset = -((totalLayers - 1) * stackedSpacing) / 2;
                    var compactOffset = centerOffset + (index * stackedSpacing);
                    img.style.transform = 'translateY(' + compactOffset + 'px) scale(1)';
                    img.style.opacity = '1';
                    img.style.filter = 'none';
                    img.style.zIndex = totalLayers - index;
                } else {
                    var offset = (layerIndex - currentLayer) * separation;
                    
                    if (layerIndex === currentLayer) {
                        img.style.transform = 'translateY(' + offset + 'px) scale(1.45)';
                        img.style.opacity = '1';
                        img.style.filter = 'none';
                        img.style.zIndex = '100';
                    } else {
                        img.style.transform = 'translateY(' + offset + 'px) scale(1)';
                        img.style.opacity = '0.4';
                        img.style.filter = 'brightness(0.7)';
                        img.style.zIndex = totalLayers - index;
                    }
                }
            });

            layerTitle.textContent = layersData[currentLayer].name;
            layerBadge.textContent = layersData[currentLayer].badge;

            // Update content based on whether it has bullets or description
            if (layersData[currentLayer].bullets) {
                layerDescription.style.display = 'none';
                layerBullets.style.display = 'flex';
                layerBullets.innerHTML = '';
                layersData[currentLayer].bullets.forEach(function(bullet) {
                    var bulletDiv = document.createElement('div');
                    bulletDiv.className = 'bullet-item';
                    bulletDiv.textContent = bullet;
                    layerBullets.appendChild(bulletDiv);
                });
            } else {
                layerDescription.style.display = 'block';
                layerBullets.style.display = 'none';
                layerDescription.textContent = layersData[currentLayer].description;
            }

            prevBtn.disabled = currentLayer === 0;
            nextBtn.disabled = currentLayer === layersData.length - 1;

            var dots = progressIndicator.querySelectorAll('.progress-dot');
            dots.forEach(function(dot, index) {
                if (index === currentLayer) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });

            setTimeout(function() {
                isAnimating = false;
            }, 700);
        }

        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (currentLayer > 0 && !isAnimating) {
                currentLayer--;
                updateLayers();
            }
        });

        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (currentLayer < layersData.length - 1 && !isAnimating) {
                currentLayer++;
                updateLayers();
            }
        });

        // Prevent double-tap zoom on buttons for mobile
        prevBtn.addEventListener('touchend', function(e) {
            e.preventDefault();
            if (currentLayer > 0 && !isAnimating) {
                currentLayer--;
                updateLayers();
            }
        });

        nextBtn.addEventListener('touchend', function(e) {
            e.preventDefault();
            if (currentLayer < layersData.length - 1 && !isAnimating) {
                currentLayer++;
                updateLayers();
            }
        });

        updateLayers();