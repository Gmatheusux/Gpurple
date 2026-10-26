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
    // Pontos da abertura: no mouse a nota abre sozinha (CSS);
    // no toque e no teclado, o botão abre e fecha
    // ----------------------------------------------------
    const pontos = [...document.querySelectorAll('[data-ponto]')];

    if (pontos.length) {
        const setAberto = (ponto, aberto) => {
            ponto.classList.toggle('is-aberto', aberto);
            ponto.querySelector('button').setAttribute('aria-expanded', String(aberto));
        };
        const fecharTodos = (exceto) => pontos.forEach((p) => { if (p !== exceto) setAberto(p, false); });

        pontos.forEach((ponto) => {
            // Tocar na própria nota também fecha
            ponto.querySelector('[role="tooltip"]').addEventListener('click', () => setAberto(ponto, false));
            ponto.querySelector('button').addEventListener('click', () => {
                const aberto = !ponto.classList.contains('is-aberto');
                fecharTodos(ponto);
                setAberto(ponto, aberto);
            });
        });

        // Toque fora fecha a nota; se o toque foi na imagem, só fecha, sem abrir o case
        document.addEventListener('click', (e) => {
            if (e.target.closest('[data-ponto]') || !pontos.some((p) => p.classList.contains('is-aberto'))) return;
            if (e.target.closest('.hero-obra__abrir')) e.preventDefault();
            fecharTodos();
        });

        // Esc esconde também a nota aberta pelo mouse ou pelo foco, até o ponteiro ou o foco saírem do ponto
        document.addEventListener('keydown', (e) => {
            if (e.key !== 'Escape') return;
            fecharTodos();
            pontos.forEach((p) => p.classList.add('is-calado'));
        });
        pontos.forEach((ponto) => {
            ponto.addEventListener('pointerleave', () => ponto.classList.remove('is-calado'));
            ponto.addEventListener('focusout', () => ponto.classList.remove('is-calado'));
        });
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
    // Projetos: carrossel. Troca de projeto sozinho a cada 7 s; para quando o mouse ou o foco do
    // teclado está nele e quando a pessoa aperta "Pausar". Ao sair, continua de onde parou.
    // As miniaturas funcionam como abas.
    // ----------------------------------------------------
    const carrossel = document.querySelector('[data-carrossel]');
    if (carrossel) {
        const abas = [...carrossel.querySelectorAll('[data-aba]')];
        const slides = abas.map((aba) => document.getElementById(aba.getAttribute('aria-controls')));
        const botaoPausa = carrossel.querySelector('[data-carrossel-pausa]');
        const tempo = 7000;
        let atual = 0;
        let timer = null;
        let rodando = false;  // já começou a contar (a seção apareceu na tela)
        let restante = tempo; // quanto falta para trocar, guardado quando pausa
        let inicio = 0;
        // Motivos para pausar: botão "Pausar", mouse em cima, foco do teclado dentro
        let parado = false;
        let mouseEmCima = false;
        let focoDentro = false;

        // Pausa ou retoma conforme os motivos acima, sem zerar o tempo que já passou
        const atualizar = () => {
            const pausa = parado || mouseEmCima || focoDentro;
            carrossel.classList.toggle('is-pausado', pausa);
            if (pausa && timer) {
                clearTimeout(timer);
                timer = null;
                restante = Math.max(0, restante - (performance.now() - inicio));
            } else if (!pausa && !timer && rodando) {
                inicio = performance.now();
                timer = setTimeout(proximo, restante);
            }
        };

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

        // Projeto novo: a contagem e a barra de tempo começam do zero
        const reiniciar = () => {
            clearTimeout(timer);
            timer = null;
            restante = tempo;
            carrossel.classList.remove('is-rodando');
            void carrossel.offsetWidth;
            rodando = abas.length > 1;
            if (rodando) carrossel.classList.add('is-rodando');
            atualizar();
        };
        const proximo = () => { timer = null; mostrar(atual + 1); };

        carrossel.style.setProperty('--carrossel-tempo', tempo + 'ms');

        // Botão de pausa: para a troca automática até a pessoa retomar (no celular não há mouse para pausar)
        if (botaoPausa && abas.length > 1) {
            botaoPausa.hidden = false;
            botaoPausa.addEventListener('click', () => {
                parado = !parado;
                botaoPausa.setAttribute('aria-pressed', String(parado));
                botaoPausa.textContent = parado ? 'Retomar a troca automática' : 'Pausar a troca automática';
                atualizar();
            });
        }
        abas.forEach((aba, n) => {
            aba.addEventListener('click', () => mostrar(n));
            aba.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight') { e.preventDefault(); mostrar(atual + 1, { foco: true }); }
                if (e.key === 'ArrowLeft') { e.preventDefault(); mostrar(atual - 1, { foco: true }); }
            });
        });

        // Só o mouse pausa ao passar por cima; o toque no celular troca de projeto e segue contando
        carrossel.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') { mouseEmCima = true; atualizar(); } });
        carrossel.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') { mouseEmCima = false; atualizar(); } });
        // Foco vindo do teclado pausa; o foco de um clique ou toque não
        const focoDeTeclado = (el) => { try { return el.matches(':focus-visible'); } catch { return true; } };
        carrossel.addEventListener('focusin', (e) => { focoDentro = focoDeTeclado(e.target); atualizar(); });
        carrossel.addEventListener('focusout', (e) => {
            if (!carrossel.contains(e.relatedTarget)) { focoDentro = false; atualizar(); }
        });

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
        const rotuloBotao = botao.innerHTML;
        const email = 'gmbarros@gpurpledesign.com.br';

        const abrirEmail = (dados) => {
            const corpo = `Olá, GPurple!\n\nMeu nome é ${dados.get('nome')}\nSite: ${dados.get('site') || '(ainda não tenho)'}\nO que eu gostaria de melhorar: ${dados.get('mensagem')}\n`;
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
                status.textContent = `Não conseguimos enviar agora. Tente de novo ou escreva para ${email}.`;
                botao.disabled = false;
                botao.innerHTML = rotuloBotao;
            }
        });
    }
});
