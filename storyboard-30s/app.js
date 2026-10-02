// ---- script 1 ----

        function copiarAlPortapapeles(idTexto, idBoton, idTextoBoton, idIcono) {
            const texto = document.getElementById(idTexto).innerText;
            const boton = document.getElementById(idBoton);
            const textoBoton = document.getElementById(idTextoBoton);
            const icono = document.getElementById(idIcono);

            navigator.clipboard.writeText(texto).then(() => {
                textoBoton.textContent = '¡Copiado!';
                boton.classList.add('copied');
                
                // Cambiar icono a checkmark (SVG)
                icono.innerHTML = '<polyline points="20 6 9 17 4 12"></polyline>';

                // Restaurar estado original del botón tras 2 segundos
                setTimeout(() => {
                    textoBoton.textContent = 'Copiar';
                    boton.classList.remove('copied');
                    // Restaurar icono de copiar original (SVG)
                    icono.innerHTML = '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>';
                }, 2000);
            }).catch(err => {
                console.error('Error al intentar copiar el texto: ', err);
                alert('Ocurrió un error al copiar de forma automática.');
            });
        }
    