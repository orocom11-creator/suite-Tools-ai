// ---- script 1 ----

        // Animación de Calabazas cayendo durante 2 segundos
        window.addEventListener('DOMContentLoaded', () => {
            const rainContainer = document.createElement('div');
            rainContainer.id = 'pumpkin-rain';
            document.body.appendChild(rainContainer);

            const emojis = ['🎃', '🎃', '🦇', '🎃', '👻', '🕸️'];
            const count = 30; // Número de elementos que caen

            for (let i = 0; i < count; i++) {
                const element = document.createElement('div');
                element.className = 'falling-pumpkin';
                element.innerText = emojis[Math.floor(Math.random() * emojis.length)];
                element.style.left = Math.random() * 95 + 'vw';
                element.style.fontSize = (22 + Math.random() * 26) + 'px';
                
                // Duración de caída rápida para cumplirse en la ventana de 2s
                const duration = 1.2 + Math.random() * 0.8;
                element.style.animationDuration = duration + 's';
                rainContainer.appendChild(element);
            }

            // Desaparecer progresivamente a los 2 segundos exactos
            setTimeout(() => {
                rainContainer.style.transition = 'opacity 0.4s ease-out';
                rainContainer.style.opacity = '0';
                setTimeout(() => {
                    rainContainer.remove();
                }, 400);
            }, 2000);
        });

        // Función Copiar al Portapapeles
        function copiarAlPortapapeles() {
            const texto = document.getElementById('textoPrompt').innerText;
            const boton = document.getElementById('btnCopiar');
            const textoBoton = document.getElementById('btnText');
            const icono = document.getElementById('copyIcon');

            navigator.clipboard.writeText(texto).then(() => {
                textoBoton.textContent = '¡Copiado!';
                boton.classList.add('copied');
                
                icono.innerHTML = '<polyline points="20 6 9 17 4 12"></polyline>';

                setTimeout(() => {
                    textoBoton.textContent = 'Copiar';
                    boton.classList.remove('copied');
                    icono.innerHTML = '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>';
                }, 2000);
            }).catch(err => {
                console.error('Error al intentar copiar el texto: ', err);
                alert('Ocurrió un error al copiar de forma automática.');
            });
        }
    