document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('[data-header]');

    // ----------------------------------------------------
    // Header: ganha fundo sólido assim que a página rola
    // ----------------------------------------------------
    if (header) {
        const updateHeader = () => header.classList.toggle('is-solid', window.scrollY > 24);
        updateHeader();
        window.addEventListener('scroll', updateHeader, { passive: true });
    }

    // ----------------------------------------------------
    // Menu em tela cheia
    // ----------------------------------------------------
    const toggle = document.querySelector('[data-menu-toggle]');
    const menu = document.getElementById('menu-site');

    if (toggle && menu) {
        const label = toggle.querySelector('[data-menu-label]');
        // Enquanto o menu está aberto, o resto da página fica fora do alcance do teclado e do leitor de tela
        const background = [document.getElementById('app'), document.getElementById('contato'), document.querySelector('[data-header-cta]')].filter(Boolean);

        const setOpen = (open, { restoreFocus = true } = {}) => {
            toggle.setAttribute('aria-expanded', String(open));
            menu.hidden = !open;
            document.body.classList.toggle('menu-aberto', open);
            background.forEach((el) => { el.inert = open; });
            if (label) label.textContent = open ? 'Fechar' : 'Menu';
            if (open) {
                menu.querySelector('a').focus();
            } else if (restoreFocus) {
                toggle.focus();
            }
        };

        toggle.addEventListener('click', () => {
            setOpen(toggle.getAttribute('aria-expanded') !== 'true');
        });

        // Escolher uma seção fecha o menu e deixa a página rolar até ela
        menu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => setOpen(false, { restoreFocus: false }));
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setOpen(false);
        });
    }

    // ----------------------------------------------------
    // Abertura: o G acompanha o mouse devagar e inclina de leve (só com mouse e com movimento liberado)
    // ----------------------------------------------------
    const heroVisual = document.querySelector('[data-hero-visual]');
    const hero = document.getElementById('hero');
    if (heroVisual && hero && matchMedia('(pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const layer = heroVisual.querySelector('.hero-parallax');
        const symbol = heroVisual.querySelector('.hero-g__svg');
        hero.addEventListener('pointermove', (e) => {
            const r = hero.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            layer.style.setProperty('--px', x * -18 + 'px');
            layer.style.setProperty('--py', y * -14 + 'px');
            symbol.style.setProperty('--ry', x * 10 + 'deg');
            symbol.style.setProperty('--rx', y * -7 + 'deg');
        });
        hero.addEventListener('pointerleave', () => {
            ['--px', '--py'].forEach((v) => layer.style.setProperty(v, '0px'));
            ['--rx', '--ry'].forEach((v) => symbol.style.setProperty(v, '0deg'));
        });
    }

    // ----------------------------------------------------
    // Marca a seção que está na tela (atalhos da barra e itens do menu)
    // ----------------------------------------------------
    const sectionLinks = document.querySelectorAll('.nav-link, .site-menu__link');
    if (sectionLinks.length && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const target = '#' + entry.target.id;
                sectionLinks.forEach((a) => {
                    if (a.getAttribute('href') === target) a.setAttribute('aria-current', 'true');
                    else a.removeAttribute('aria-current');
                });
            });
        }, { rootMargin: '-45% 0px -50% 0px' });

        document.querySelectorAll('main section[id], #contato').forEach((section) => observer.observe(section));
    }
});
