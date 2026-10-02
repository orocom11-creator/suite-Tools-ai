// ---- script 1 ----

        function copyPrompt() {
            const promptText = document.getElementById('promptText').innerText;
            navigator.clipboard.writeText(promptText).then(() => {
                const btnText = document.getElementById('btnText');
                btnText.innerText = '¡Copiado!';
                setTimeout(() => {
                    btnText.innerText = 'Copiar Prompt';
                }, 2000);
            }).catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
        }
    