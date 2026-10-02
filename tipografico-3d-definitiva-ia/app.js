// ---- script 1 ----

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
    