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
        const background = [document.getElementById('app'), document.getElementById('rodape'), document.querySelector('[data-header-cta]')].filter(Boolean);

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
    // Marca a seção que está na tela (atalhos da barra e itens do menu)
    // ----------------------------------------------------
    const sectionLinks = document.querySelectorAll('.nav-link, .site-menu__link');
    if (sectionLinks.length && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const id = entry.target.id;
                // data-secoes: um atalho que cobre mais de uma seção (Serviços = O problema + Serviços)
                sectionLinks.forEach((a) => {
                    const secoes = a.dataset.secoes ? a.dataset.secoes.split(' ') : [a.getAttribute('href').slice(1)];
                    if (secoes.includes(id)) a.setAttribute('aria-current', 'true');
                    else a.removeAttribute('aria-current');
                });
            });
        }, { rootMargin: '-45% 0px -50% 0px' });

        document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
    }

    // ----------------------------------------------------
    // Projetos: carrossel. Troca de projeto sozinho a cada 7 s; para quando o mouse ou o foco
    // está nele, quando a pessoa aperta "Pausar" e não roda para quem pediu menos movimento.
    // As miniaturas funcionam como abas.
    // ----------------------------------------------------
    const carrossel = document.querySelector('[data-carrossel]');
    if (carrossel) {
        const abas = [...carrossel.querySelectorAll('[data-aba]')];
        const slides = abas.map((aba) => document.getElementById(aba.getAttribute('aria-controls')));
        const botaoPausa = carrossel.querySelector('[data-carrossel-pausa]');
        const tempo = 7000;
        const reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let atual = 0;
        let timer = null;
        let parado = false;

        const mostrar = (i, { foco = false } = {}) => {
            atual = (i + abas.length) % abas.length;
            abas.forEach((aba, n) => {
                const ativa = n === atual;
                aba.setAttribute('aria-selected', String(ativa));
                aba.tabIndex = ativa ? 0 : -1;
                slides[n].hidden = !ativa;
                slides[n].classList.toggle('is-entrando', ativa);
            });
            if (foco) abas[atual].focus();
            reiniciar();
        };

        const reiniciar = () => {
            clearTimeout(timer);
            // Reinicia a barra de tempo da miniatura ativa
            carrossel.classList.remove('is-rodando');
            void carrossel.offsetWidth;
            if (reduzMovimento || parado || abas.length < 2) return;
            carrossel.classList.add('is-rodando');
            if (!carrossel.classList.contains('is-pausado')) timer = setTimeout(proximo, tempo);
        };
        const proximo = () => mostrar(atual + 1);

        carrossel.style.setProperty('--carrossel-tempo', tempo + 'ms');

        // Botão de pausa: para a troca automática até a pessoa retomar (no celular não há mouse para pausar)
        if (botaoPausa && !reduzMovimento && abas.length > 1) {
            botaoPausa.hidden = false;
            botaoPausa.addEventListener('click', () => {
                parado = !parado;
                botaoPausa.setAttribute('aria-pressed', String(parado));
                botaoPausa.textContent = parado ? 'Retomar a troca automática' : 'Pausar a troca automática';
                if (parado) clearTimeout(timer);
                reiniciar();
            });
        }
        abas.forEach((aba, n) => {
            aba.addEventListener('click', () => mostrar(n));
            aba.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight') { e.preventDefault(); mostrar(atual + 1, { foco: true }); }
                if (e.key === 'ArrowLeft') { e.preventDefault(); mostrar(atual - 1, { foco: true }); }
            });
        });

        // Pausado, o relógio para; ao sair, a contagem recomeça do zero
        const pausar = (sim) => {
            if (carrossel.classList.contains('is-pausado') === sim) return;
            carrossel.classList.toggle('is-pausado', sim);
            if (sim) clearTimeout(timer);
            else reiniciar();
        };
        carrossel.addEventListener('mouseenter', () => pausar(true));
        carrossel.addEventListener('mouseleave', () => pausar(carrossel.contains(document.activeElement)));
        carrossel.addEventListener('focusin', () => pausar(true));
        carrossel.addEventListener('focusout', (e) => { if (!carrossel.contains(e.relatedTarget)) pausar(false); });

        // Só começa a contar quando a seção aparece na tela
        if ('IntersectionObserver' in window) {
            new IntersectionObserver((entries, obs) => {
                if (entries[0].isIntersecting) { reiniciar(); obs.disconnect(); }
            }, { threshold: 0.4 }).observe(carrossel);
        } else {
            reiniciar();
        }
    }

    // ----------------------------------------------------
    // Contato: envia pelo Formspree sem sair da página. Sem o endereço do formulário no action
    // (PREENCHER), abre o e-mail da pessoa com os mesmos campos preenchidos.
    // ----------------------------------------------------
    const form = document.querySelector('[data-contato-form]');
    if (form) {
        const status = form.querySelector('[data-contato-status]');
        const botao = form.querySelector('button[type="submit"]');
        const email = 'gmbarros@gpurpledesign.com.br';

        const abrirEmail = (dados) => {
            const corpo = `Olá, GPurple!\n\nNome: ${dados.get('nome')}\nSite: ${dados.get('site') || '(ainda não tenho)'}\n\n${dados.get('mensagem')}\n`;
            window.location.href = `mailto:${email}?subject=${encodeURIComponent('Novo projeto')}&body=${encodeURIComponent(corpo)}`;
        };

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (!form.reportValidity()) return;
            const dados = new FormData(form);
            if (dados.get('_gotcha')) return;
            if (form.action.includes('PREENCHER')) { abrirEmail(dados); return; }

            botao.disabled = true;
            botao.textContent = 'Enviando…';
            status.classList.remove('is-erro');
            status.textContent = '';
            try {
                const resposta = await fetch(form.action, { method: 'POST', body: dados, headers: { Accept: 'application/json' } });
                if (!resposta.ok) throw new Error(resposta.status);
                const sucesso = document.createElement('div');
                sucesso.className = 'contato-form__sucesso';
                sucesso.setAttribute('role', 'status');
                sucesso.tabIndex = -1;
                sucesso.innerHTML = '<strong>Mensagem enviada.</strong><p>Obrigado por contar sobre o seu projeto. Vamos responder no e-mail que você informou.</p>';
                form.replaceWith(sucesso);
                sucesso.focus();
            } catch {
                status.classList.add('is-erro');
                status.textContent = `Não conseguimos enviar agora. Tente de novo ou escreva para ${email}.`;
                botao.disabled = false;
                botao.textContent = 'Enviar mensagem';
            }
        });
    }
});
