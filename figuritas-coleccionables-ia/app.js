// ---- script 1 ----

        function copyPrompt() {
            const promptText = document.getElementById('promptText').innerText;
            navigator.clipboard.writeText(promptText).then(() => {
                const btn = document.querySelector('.copy-btn');
                const originalHTML = btn.innerHTML;
                btn.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    ¡Copiado!
                `;
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                }, 2000);
            });
        }

        // Función para compartir mediante la API nativa de dispositivos o copiar al portapapeles
        function sharePost() {
            if (navigator.share) {
                navigator.share({
                    title: 'Figuritas Coleccionables IA - Prompt en AI DAN SOLUTIONS',
                    text: 'Aprende a usar la Inteligencia Artificial con este prompt optimizado en un solo clic.',
                    url: window.location.href
                }).catch((error) => console.log('Acción cancelada', error));
            } else {
                navigator.clipboard.writeText(window.location.href).then(() => {
                    alert('¡Enlace copiado al portapapeles! Puedes pegarlo donde desees compartirlo.');
                });
            }
        }
    