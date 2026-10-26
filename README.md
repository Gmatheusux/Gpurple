<p align="center">
  <img src="favicon.svg" alt="Símbolo G da GPurple" width="96">
</p>

<h1 align="center">gpurple<span>.</span> studio</h1>

<p align="center">
  Site portfólio da GPurple, estúdio boutique de design e tecnologia.<br>
  <a href="https://gmatheusux.github.io/Gpurple/"><strong>Ver o site no ar →</strong></a>
</p>

---

## Sumário

- [Sobre](#sobre)
- [Quem faz](#quem-faz)
- [Comece por aqui (para continuar o trabalho)](#comece-por-aqui-para-continuar-o-trabalho)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Seções da página principal](#seções-da-página-principal)
- [Projetos: como documentar e adicionar cases](#projetos-como-documentar-e-adicionar-cases)
- [Rodar localmente](#rodar-localmente)
- [Mudou classes do Tailwind? Recompile o CSS](#mudou-classes-do-tailwind-recompile-o-css)
- [Publicação](#publicação)
- [Guia de conteúdo](#guia-de-conteúdo)
- [Guia visual](#guia-visual)
- [Como o site foi construído](#como-o-site-foi-construído)
- [Pendências antes de prospectar](#pendências-antes-de-prospectar)

## Sobre

Site estático (HTML + Tailwind CSS + JavaScript puro) publicado pelo GitHub Pages. O CSS do Tailwind já vai compilado em `assets/css/tailwind.css`, então o que está na branch `main` é o que vai ao ar. Não há framework, servidor nem etapa de build no deploy.

O objetivo do site é dar credibilidade à prospecção de clientes (e-mail frio, LinkedIn e reuniões). Por isso ele só mostra trabalho real e tem um caminho de contato que funciona.

Projeto original criado por [Dex](https://github.com/GZR-dex/Gpurple). Esta cópia foi reorganizada e redesenhada seção por seção a partir de outubro de 2026 (veja [Como o site foi construído](#como-o-site-foi-construído)).

## Quem faz

| Nome no site | Apelido | Papel |
| --- | --- | --- |
| Gabriel Barros | Gabe | UX, arquitetura e segurança ([LinkedIn](https://www.linkedin.com/in/gabrielmbarros/)) |
| Gabriel Zoppello | Dex | UI e conversão |

Na seção **Estúdio** aparecem o nome completo e o apelido. No resto do site, só o apelido.

Contato oficial: **gmbarros@gpurpledesign.com.br**. O endereço `contato@gpurple.com.br` não recebe e-mails e não deve ser usado. A GPurple não tem Instagram; o rodapé mostra só o LinkedIn.

## Comece por aqui (para continuar o trabalho)

Se você está abrindo este repositório numa conversa nova para continuar o site:

1. Leia o [Guia de conteúdo](#guia-de-conteúdo): ele diz o que pode e o que não pode ser publicado (principalmente: **nenhum case, número ou depoimento inventado**).
2. Para mexer na seção de projetos, siga [Projetos: como documentar e adicionar cases](#projetos-como-documentar-e-adicionar-cases). Lá estão o modelo de página, onde cada informação entra e a lista do que conferir antes de publicar.
3. Trabalhe numa branch e abra um pull request para a `main`. Ao juntar o PR, o site atualiza sozinho.
4. Se trocou ou adicionou classes do Tailwind em algum HTML, rode `npm run build` antes do commit.

## Estrutura de pastas

```
.
├── index.html                      # Página principal (todas as seções da home)
├── projetos/
│   ├── orquidario-cantareira.html  # Case: Orquidário Cantareira (modelo para novos cases)
│   └── allp-fit.html               # Case de UX: app Allp Fit Home (pesquisa, proposta de valor, arquitetura, telas de baixa e alta)
├── materiais/                      # Materiais comerciais (fora do menu, com noindex)
│   ├── apresentacao.html           # Apresentação para reuniões (setas ← → navegam)
│   ├── email-corporativo.html      # Modelo de e-mail com assinatura
│   └── templates-email.html        # Biblioteca de templates (aparece em Projetos como GPurple Lab)
├── assets/
│   ├── css/
│   │   ├── styles.css              # Tokens de cor e o visual de cada seção (comentado por seção)
│   │   ├── tailwind.css            # Gerado pelo `npm run build`, não editar à mão
│   │   └── templates-email.css     # Gerado pelo `npm run build`, só da página de templates
│   ├── js/main.js                  # Header ao rolar, menu em tela cheia, seção ativa
│   └── img/
│       ├── marca/                  # G 3D (imagem de compartilhamento) e logo em SVG
│       ├── equipe/                 # Fotos dos sócios
│       ├── projetos/               # Imagens dos cases (capa, logo, mockup)
│       └── materiais/              # Imagens da apresentação
├── src/tailwind.css                # Entrada do Tailwind
├── tailwind.config.js              # Cores e fontes da marca (lê index.html e projetos/)
├── tailwind.templates.config.js    # Config separada da página de templates de e-mail
├── 404.html                        # Página de erro
└── favicon.svg
```

Os manuais e relatórios internos (PDFs) ficam fora do repositório: o `.gitignore` bloqueia `*.pdf`.

## Seções da página principal

Cada seção do `index.html` começa com um comentário numerado (`<!-- 4. Projetos ... -->`) e tem o estilo próprio num bloco comentado do `styles.css` com o mesmo nome.

| # | Âncora | Seção | Como é |
| --- | --- | --- | --- |
| – | – | Header | Barra de ponta a ponta com atalhos para as seções e botão **Menu**, que abre um mapa em tela cheia com uma linha explicando cada seção. |
| 1 | `#hero` | Abertura | Fundo claro. À esquerda, o título, o subtítulo e os botões; à direita, a loja do Orquidário numa janela de navegador, com dois pinos numerados que explicam decisões do projeto. Só a imagem entra com movimento. |
| 2 | `#projetos` | Projetos | Fundo claro, logo depois da abertura, para o trabalho aparecer cedo e o banner escuro se destacar. Carrossel: o projeto em destaque fica grande (nome, cliente, descrição e "Ver o case completo") e os outros aparecem em miniaturas embaixo. Troca sozinho a cada 7 s, para com o mouse ou o foco em cima e tem o botão "Pausar a troca automática". |
| 3 | `#problema` | O problema | Três cartões, um por motivo de desistência: mini tela, o que acontece, "Como saber se é o seu caso" e "O que fazemos" (com link para o serviço). Fecha com o convite para a análise. |
| 4 | `#servicos` | Serviços | Mosaico; cada serviço diz qual problema de cima ele resolve. |
| 5 | `#processo` | Processo | Trilha de cartões, cada etapa mostra o que o cliente recebe. |
| 6 | `#estudio` | Equipe | Manifesto à esquerda, Gabriel Barros e Gabriel Zoppello em linhas à direita. |
| 7 | `#contato` | Contato | Um e-mail simulado ("Nova mensagem", Para, Assunto e o texto "Olá, GPurple! Meu nome é…") em que as lacunas são os campos do formulário: nome, e-mail, site se tiver e o que a pessoa quer melhorar. O envio vai pelo Formspree sem sair da página, com o link "ou escreva do seu e-mail" como alternativa. O endereço do formulário (`https://formspree.io/f/xwlllbak`) fica no `action` do `<form data-contato-form>`; as mensagens chegam no e-mail cadastrado no Formspree. Se o `action` virar `PREENCHER`, o envio abre o e-mail da pessoa com os campos preenchidos. |
| 8 | `#faq` | Dúvidas frequentes | Acordeão com a primeira resposta aberta. |
| 9 | `#rodape` | Rodapé | Marca, links das seções, e-mail e LinkedIn. |

Os fundos: a Abertura e Projetos são claros. O problema, Serviços, Processo e Equipe ficam dentro do **painel roxo** (`.painel-roxo`), um bloco de cantos arredondados com uma margem do claro em volta, de modo que a troca de cor é a borda do painel e não há faixa de passagem. Por dentro, o painel tem um degradê só, com um grão fino para não formar degraus: começa no roxo médio (`--tom-1`), desce até o mais escuro em Processo (`--tom-3`) e clareia de novo na Equipe (`--tom-4`). Depois do painel, Contato, Dúvidas frequentes e rodapé voltam ao claro. Cada seção leva a classe `secao` (espaço de cima e de baixo, `--respiro`) e a do seu fundo (`fundo-claro`, ou `fundo-escuro` com um `tom-N` dentro do painel). Nos cases, a cor passa de uma seção para outra (`caso-secao--claro`, `--escuro` ou `--medio`) por uma faixa em degradê automática (`--faixa-passagem`).

**Cores do texto.** São quatro papéis, cada um com um valor para fundo escuro e outro para fundo claro, definidos no começo do `styles.css`. Todos passam o contraste AA sobre qualquer fundo da sua família, inclusive os degradês:

| Papel | Classe | No escuro | No claro |
| --- | --- | --- | --- |
| Título e texto forte | `.texto-titulo` | `#ffffff` | `#15121f` |
| Texto de leitura | `.texto-corpo` | `#cdc6e4` | `#4a4560` |
| Legendas e rótulos pequenos | `.texto-apoio` | `#b3a9d6` | `#5b5670` |
| Frase-chave, rótulo de seção e links | `.texto-destaque` | `#e8cfa0` (Champanhe) | `#5b30d6` |

O escuro é o padrão; seções e cartões claros (`.fundo-claro`, `.caso-secao--claro`, o e-mail do Contato, as miniaturas do carrossel etc.) trocam os valores sozinhos. Não use cor solta no texto (`text-white`, `text-[#...]`): use a classe do papel ou `var(--texto-*)` no CSS.

No menu, o atalho Serviços leva para Serviços e fica marcado também em O problema (atributo `data-secoes`).

## Projetos: como documentar e adicionar cases

### O que está publicado hoje

| Onde aparece | Projeto | Página | Situação |
| --- | --- | --- | --- |
| Vitrine (destaque) | Orquidário Cantareira: identidade visual e loja virtual, criadas do zero | `projetos/orquidario-cantareira.html` | Em andamento. Falta a autorização do cliente para exibir. |
| Faixa | GPurple Lab: templates de e-mail (projeto autoral) | `materiais/templates-email.html` | Publicado. |
| Faixa | Allp Fit Home: pesquisa, proposta de valor, arquitetura e wireframes de um app de treino | `projetos/allp-fit.html` | Entregue em 2023 pela VM Pereira Design, com Gabriel Barros como Lead Product Designer; outra empresa finalizou e publicou o app. Downloads e nota conferidos na Google Play em 25/05/2026. |

O Orquidário e o Allp Fit são os projetos de cliente no site. A página do Allp Fit usa os blocos `.caso-*` do `styles.css` (seções em claro, escuro e roxo médio, diagramas em HTML) e pode servir de modelo para cases longos de UX. Os cases antigos do site original (TechCorp e Elite Studio) eram fictícios e foram removidos. Novos projetos entram aqui conforme forem documentados.

### Antes de escrever: junte o material

Para cada projeto, tenha em mãos:

- **Cliente e segmento**, e a autorização por escrito para mostrar o trabalho (e o nome, se for o caso).
- **Escopo**: o que a GPurple fez (identidade, site, loja, UX, conteúdo...).
- **Situação**: em andamento ou entregue, e quando.
- **Desafio**: o problema do cliente em duas ou três frases, na língua dele.
- **Abordagem**: três decisões principais, cada uma com um título curto e uma frase.
- **Resultado** (só se for real e verificável): números com a fonte e o período, ou um depoimento autorizado com nome e cargo. Sem resultado ainda, a página não tem bloco de resultado. Não invente nem arredonde para cima.
- **Imagens**: uma capa horizontal (cerca de 1400 × 770), o logo do cliente e um mockup da tela principal (PNG com fundo transparente fica melhor na vitrine).
- **Antes e depois**, só se existia algo antes. No Orquidário não existe, porque tudo foi criado do zero.

### Anatomia da página de um case

`projetos/orquidario-cantareira.html` é o modelo. Cada bloco tem um comentário no HTML:

| Bloco | O que entra |
| --- | --- |
| `<head>` | `<title>`, `meta description` e as tags `og:` (título, descrição e imagem de compartilhamento, com a URL completa do site). |
| Header | Volta para "Todos os projetos", logo e botão "Falar com a gente". Não precisa mudar. |
| Abertura (fundo claro) | Rótulo com o nome do cliente, título curto (a ideia do projeto), uma frase de resumo e a ficha com **Status**, **Escopo** e **Segmento**. Embaixo, o mockup numa janela de navegador. |
| Desafio e abordagem | "O desafio" em dois parágrafos; "A abordagem" com três passos numerados. |
| Galeria | Logo e direção de arte lado a lado. |
| CTA final | Pergunta de fechamento, botão "Pedir análise" e o cartão "Próximo projeto". |

Se o projeto tiver resultado real, acrescente uma seção entre a abordagem e a galeria, no mesmo padrão das outras (`<section class="caso-secao caso-secao--claro">` com um `.caso-container` dentro).

### Passo a passo para um case novo

1. Copie `projetos/orquidario-cantareira.html` para `projetos/nome-do-cliente.html` (minúsculas, hífens, sem acento).
2. Coloque as imagens em `assets/img/projetos/` com o nome do cliente na frente: `cliente-capa.jpg`, `cliente-logo.jpg`, `cliente-mockup.png`. Exporte em JPG ou WebP com até ~300 KB (PNG só para o mockup com transparência). Um case com muitas telas pode ganhar uma pasta própria, como `assets/img/projetos/allp-fit/` (telas `baixa-*` e `alta-*` exportadas do Figma, `fundo.svg` da abertura e `og.jpg`).
3. Troque textos, imagens, `<title>`, `description` e tags `og:` da nova página. Dentro de `projetos/`, os caminhos começam com `../` (`../assets/img/projetos/...`).
4. No `index.html`, seção `#projetos`:
   - Dentro de `.carrossel-palco`, duplique um slide (`<div class="carrossel-slide" role="tabpanel" data-slide>` com a vitrine `<a class="project-feature vitrine">` dentro), troque o `id` e o `aria-labelledby` do slide e o `href`, as imagens, o nome, o cliente e a descrição da vitrine, e deixe o slide `hidden`. Imagem em pé usa `vitrine-mockup--retrato`.
   - Dentro de `.carrossel-miniaturas`, duplique uma miniatura (`<button role="tab" data-aba>`), troque o `id`, o `aria-controls` (o `id` da vitrine) e os textos. A ordem das miniaturas é a ordem do carrossel; a primeira começa selecionada.
   - Na página principal os caminhos começam com `./` (`./assets/img/projetos/...`).
5. Se usou classes do Tailwind que ainda não existiam no site, rode `npm run build`.
6. Abra o site local (veja [Rodar localmente](#rodar-localmente)) e confira no desktop e no celular.

### Conferir antes de publicar

- [ ] O cliente autorizou mostrar o trabalho (e o nome).
- [ ] Nenhum número, logo ou depoimento sem fonte. Status correto ("em andamento" ou "entregue").
- [ ] Textos seguem o [Guia de conteúdo](#guia-de-conteúdo): frases curtas, foco no cliente, botões com verbo de ação.
- [ ] Toda imagem tem `alt` descritivo (imagem decorativa leva `alt=""`).
- [ ] Imagens leves (até ~300 KB) e com `loading="lazy"` na página principal.
- [ ] Links "Ver o case completo" e "Todos os projetos" funcionam.
- [ ] Tags `og:` apontam para `https://gmatheusux.github.io/Gpurple/...` (ou para o domínio próprio, quando houver).

## Rodar localmente

Abra o `index.html` no navegador, ou sirva a pasta para os caminhos funcionarem igual ao site publicado:

```bash
python3 -m http.server 8000
# acesse http://localhost:8000
```

## Mudou classes do Tailwind? Recompile o CSS

Se você adicionar ou trocar classes do Tailwind no HTML, gere o CSS de novo antes do commit (precisa de Node.js):

```bash
npm install
npm run build   # gera o CSS do site e o da página de templates
npm run dev     # recompila o CSS do site enquanto você edita
```

O Tailwind lê `index.html` e tudo em `projetos/`. As páginas de `materiais/` usam CSS próprio ou o `templates-email.css`.

## Publicação

Em **Settings → Pages**, a fonte é *Deploy from a branch*, branch `main`, pasta `/ (root)`. Cada push na `main` atualiza o site. O andamento do deploy aparece na aba **Actions** (fluxo *pages build and deployment*); às vezes ele fica alguns minutos na fila do GitHub.

O arquivo `.nojekyll` faz o GitHub servir os arquivos como estão, sem processar com Jekyll.

## Guia de conteúdo

O tom segue o Manual de Identidade Visual da GPurple (documento interno) e o guia [Tom de voz e melhorias na copy](https://claude.ai/code/artifact/2da5728d-33a8-44fb-9165-fab9f74ad803): um especialista conversando com o dono do negócio. Sempre "você" (nunca alternando com "te" ou "vocês"), frases curtas, sem gíria e sem jargão sem tradução.

- **Fale com o cliente, não sobre você.** "Você fala direto com quem faz" em vez de "Nós possuímos uma equipe sênior".
- **Botão diz o que a pessoa recebe, sem falar de preço.** "Pedir análise" no botão principal e "Falar com a gente" nos demais. Nunca "Clique aqui", "Enviar" nem "grátis" no botão: a análise sem custo é mencionada uma vez, em texto, na área de contato e no FAQ.
- **Prova real ou nenhuma.** Só publique números, depoimentos e logos de clientes com autorização e dados verificáveis. Números ilustrativos levam o rótulo "Cenário ilustrativo".
- **Nada de escassez falsa.** Não use "apenas 2 vagas" se não for verdade.
- **Português do dia a dia.** Prefira "medir conversões" a "tagueamento server-side" no texto para o cliente; o termo técnico pode vir entre parênteses.
- **Sem cara de texto gerado.** Evite frases espelhadas ("bonitos para X, rápidos para Y"), trios automáticos ("design, tecnologia e estratégia"), o contraste "não é X, é Y" e rótulos vazios como "alto padrão", "boutique", "de ponta a ponta" e "soluções".
- **Texto longo em blocos.** Quebre explicações em frases curtas, itens ou cartões; o que importa fica visível sem precisar clicar.

## Guia visual

Segue o Manual de Identidade Visual, com um ajuste aprovado em 16/10/2026: o **Volt Lime** saiu dos botões porque brigava com o roxo.

| Token (`assets/css/styles.css`) | Cor | Uso |
| --- | --- | --- |
| `--color-brand-primary` | `#8B5CF6` Electric Purple | "G" do logo, fundos e ícones. Não usar em texto pequeno. |
| `--color-brand-primary-soft` | `#C4B5FD` | Etiquetas e texto roxo pequeno (contraste AA). |
| `--color-brand-accent` | `#E8CFA0` Champanhe | Botões principais, frases-chave dos títulos, links de ação. |
| `--color-brand-volt` | `#D9F956` Volt Lime | Só o ponto final do logo (`gpurple.`). |
| `--color-surface-dark` / `--color-surface-card` | `#0B0A14` / `#141124` | Fundos das seções, alternados. |
| `--color-surface-light` | `#F4F2F8` | Seções claras (abertura, Projetos e Contato). |
| `--texto-*` | ver "Cores do texto" | Texto de títulos, leitura, apoio e destaque, em fundo claro e escuro. |

- **Títulos** em Montserrat 600/700 (classe `section-title`), texto em Inter 16 px ou mais. Nada abaixo de 12 px. A Montserrat substituiu a Poppins em 19/10/2026, porque a Poppins é uma das fontes mais repetidas em sites gerados por IA.
- **Uma frase-chave por tela** em Champanhe, no máximo.
- **Rótulo acima do título** (`.rotulo`): só onde ajuda a se localizar (Nossa expertise, Projetos, Perguntas frequentes, Contato), sem caixa alta e sem cor de marca. Cartões usam superfície sólida, sem gradiente nem sombra roxa. Referência: o documento "o que evitar para não parecer site feito por IA", no projeto.
- **Brilho e animação**: nada de brilho, glow ou manchas desfocadas. Movimento só para guiar o olhar (a imagem da abertura entra uma vez) ou mostrar mudança de estado.
- **Abertura** (19/10/2026): o G em órbita saiu, porque roxo com brilho sobre fundo preto é o retrato de site gerado por IA. A abertura tem fundo claro e mostra trabalho real (o Orquidário). Sobre o fundo claro, o botão principal fica em tinta escura e a frase-chave em roxo escuro `#5b30d6`, já que o Champanhe perde contraste. O manual da marca ainda cita o G 3D como visual da abertura e os botões em Volt Lime, e precisa ser atualizado.
- No Tailwind, as cores da marca são variáveis CSS: use `bg-gpurple-accent`, mas não `bg-gpurple-accent/10` (o modificador de opacidade não funciona com variáveis). Para transparência, use um valor `rgba(...)` entre colchetes.

## Como o site foi construído

Cada etapa entrou na `main` por um pull request, onde estão as prévias e as decisões:

| PR | O que mudou |
| --- | --- |
| Commits diretos | Cópia do site do Dex, textos reescritos para o tom de portfólio, cases fictícios (TechCorp e Elite Studio) removidos, foto e LinkedIn do Gabe, novo e-mail de contato, prévias de compartilhamento, materiais internos fora dos buscadores e correções da abertura. |
| [#1](https://github.com/Gmatheusux/Gpurple/pull/1) | Auditoria de UI: títulos em Poppins Bold, destaque champanhe nos botões, contraste e tamanhos mínimos de texto, menu no celular e CTA "Iniciar um projeto". |
| [#2](https://github.com/Gmatheusux/Gpurple/pull/2) | Contato só com o botão "Contar sobre o projeto" (o "Copiar e-mail" saiu por ser redundante). |
| [#3](https://github.com/Gmatheusux/Gpurple/pull/3) | Header novo: barra de ponta a ponta com atalhos e menu em tela cheia. |
| [#4](https://github.com/Gmatheusux/Gpurple/pull/4) | Abertura com o G sólido do logo em órbita, no lugar do G de vidro 3D. |
| [#5](https://github.com/Gmatheusux/Gpurple/pull/5) | Todas as seções redesenhadas: O problema, Serviços, Projetos em vitrine, Processo, Formatos, Estúdio, FAQ, Contato e rodapé. |
| [#6](https://github.com/Gmatheusux/Gpurple/pull/6) | Abertura com esmaecer curto para quem reduz movimento no sistema. |
| [#7](https://github.com/Gmatheusux/Gpurple/pull/7) | Barra do header com atalhos para todas as seções. |

## Pendências antes de prospectar

- [ ] Foto do Dex na seção **Estúdio** (hoje há um monograma no lugar; há um `TODO` no `index.html`)
- [ ] LinkedIn do Dex, se ele quiser aparecer
- [ ] WhatsApp e link de agendamento (Cal.com ou Calendly) ao lado do e-mail, na seção de contato
- [ ] Criar `contato@` no domínio e trocar o e-mail de contato (hoje vai para gmbarros@gpurpledesign.com.br)
- [ ] Autorização do Orquidário Cantareira para exibir o case
- [ ] Documentar os outros projetos e publicar como cases (veja [Projetos](#projetos-como-documentar-e-adicionar-cases))
- [ ] Domínio próprio (ex.: `gpurpledesign.com.br`) apontando para o GitHub Pages
- [ ] Atualizar o Manual de Identidade Visual: botões em champanhe, títulos em Montserrat e a abertura clara com trabalho real
