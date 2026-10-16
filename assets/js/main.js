document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // Carrossel de projetos: arrastar com o mouse no desktop
    // ----------------------------------------------------
    const slider = document.getElementById('portfolio-slider');

    if (slider) {
        let isDown = false;
        let isDragging = false; // true quando o usuário arrastou, false quando só clicou
        let startX = 0;
        let scrollLeft = 0;

        const endDrag = () => {
            isDown = false;
            slider.style.scrollSnapType = '';
        };

        slider.addEventListener('mousedown', (e) => {
            if (e.button !== 0) return; // só o botão esquerdo inicia o arraste
            isDown = true;
            isDragging = false;
            slider.style.scrollSnapType = 'none'; // sem snap durante o arraste, para ficar fluido
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', endDrag);
        slider.addEventListener('mouseup', endDrag);

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            const x = e.pageX - slider.offsetLeft;
            if (Math.abs(x - startX) > 5) {
                isDragging = true;
                e.preventDefault(); // evita selecionar texto enquanto arrasta
                slider.scrollLeft = scrollLeft - (x - startX) * 1.5;
            }
        });

        // Um arraste não deve abrir o card. Um clique normal segue o link
        // do jeito nativo (Ctrl/Cmd+clique e botão do meio continuam abrindo em nova aba).
        slider.querySelectorAll('a').forEach((link) => {
            link.addEventListener('dragstart', (e) => e.preventDefault());
            link.addEventListener('click', (e) => {
                if (isDragging) {
                    e.preventDefault();
                    isDragging = false;
                }
            });
        });
    }

    // ----------------------------------------------------
    // Botão "Copiar e-mail" (para quem não usa app de e-mail no computador)
    // ----------------------------------------------------
    document.querySelectorAll('[data-copy]').forEach((button) => {
        const label = button.querySelector('[data-copy-label]') || button;
        const original = label.textContent;

        button.addEventListener('click', async () => {
            const text = button.getAttribute('data-copy');
            try {
                await navigator.clipboard.writeText(text);
                label.textContent = 'E-mail copiado';
            } catch {
                // Navegadores sem acesso à área de transferência: abre o e-mail como alternativa
                window.location.href = 'mailto:' + text;
                return;
            }
            setTimeout(() => { label.textContent = original; }, 2500);
        });
    });
});
