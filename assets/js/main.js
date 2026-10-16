document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // Lógica de Drag-to-Scroll (Touch na tela do Desktop)
    // ----------------------------------------------------
    const slider = document.getElementById('portfolio-slider');
    let isDown = false;
    let isDragging = false; // Detecta se o usuário arrastou ou só clicou
    let startX;
    let scrollLeft;

    if (slider) {
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            isDragging = false; // Reseta no clique inicial
            // Remove o snap temporariamente durante o drag para ficar fluido como um celular
            slider.style.scrollSnapType = 'none'; 
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            // Restaura o snap ao sair
            slider.style.scrollSnapType = ''; 
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            // Restaura o snap ao soltar o mouse
            slider.style.scrollSnapType = ''; 
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            const x = e.pageX - slider.offsetLeft;
            
            // Só considera como arraste (drag) se mover mais de 5 pixels
            if (Math.abs(x - startX) > 5) {
                isDragging = true; 
                e.preventDefault(); // Evita seleção de texto APENAS se estiver arrastando
                const walk = (x - startX) * 1.5; // Multiplicador de velocidade
                slider.scrollLeft = scrollLeft - walk;
            }
        });

        // Correção para as tags <a> dentro do slider
        const links = slider.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('dragstart', (e) => e.preventDefault());
            
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Previne o comportamento nativo por segurança
                
                if (!isDragging) {
                    // Força a navegação via Javascript se não for um arraste
                    const destino = link.getAttribute('href');
                    if (destino) {
                        window.location.href = destino;
                    }
                }
            });
        });
    }

});
