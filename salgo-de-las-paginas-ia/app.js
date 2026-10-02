// ---- script 1 ----

        function copyPrompt() {
            const promptText = document.getElementById('promptCode').innerText;
            navigator.clipboard.writeText(promptText).then(() => {
                const btn = document.getElementById('copyBtn');
                const btnText = document.getElementById('btnText');
                
                btn.classList.add('copied');
                btnText.innerText = '¡Copiado!';
                
                setTimeout(() => {
                    btn.classList.remove('copied');
                    btnText.innerText = 'Copiar Prompt';
                }, 2000);
            }).catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
        }
    