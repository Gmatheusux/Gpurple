document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // Menu do celular
    // ----------------------------------------------------
    const toggle = document.querySelector('[data-menu-toggle]');
    const menu = document.getElementById('menu-celular');

    if (toggle && menu) {
        const label = toggle.querySelector('[data-menu-label]');

        const setOpen = (open) => {
            toggle.setAttribute('aria-expanded', String(open));
            menu.hidden = !open;
            document.body.classList.toggle('menu-aberto', open);
            if (label) label.textContent = open ? 'Fechar' : 'Menu';
        };

        toggle.addEventListener('click', () => {
            setOpen(toggle.getAttribute('aria-expanded') !== 'true');
        });

        // Fecha ao escolher uma seção ou apertar Esc
        menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
                setOpen(false);
                toggle.focus();
            }
        });

        // Se a tela crescer para desktop com o menu aberto, fecha
        window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => {
            if (e.matches) setOpen(false);
        });
    }

    // ----------------------------------------------------
    // Menu do desktop: marca a seção que está na tela
    // ----------------------------------------------------
    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks.length && 'IntersectionObserver' in window) {
        const byId = new Map([...navLinks].map((a) => [a.getAttribute('href').slice(1), a]));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                navLinks.forEach((a) => a.removeAttribute('aria-current'));
                const link = byId.get(entry.target.id);
                if (link) link.setAttribute('aria-current', 'true');
            });
        }, { rootMargin: '-45% 0px -50% 0px' });

        document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
    }
});
