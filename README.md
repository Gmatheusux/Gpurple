<p align="center">
  <img src="favicon.svg" alt="Símbolo G da GPurple" width="96">
</p>

<h1 align="center">gpurple<span>.</span> studio</h1>

<p align="center">
  Site portfólio da GPurple, estúdio de design e desenvolvimento no Rio de Janeiro.<br>
  <a href="https://gmatheusux.github.io/Gpurple/"><strong>Ver o site no ar →</strong></a>
</p>

---

## Sumário

- [Sobre](#sobre)
- [Quem faz](#quem-faz)
- [Comece por aqui (para continuar o trabalho)](#comece-por-aqui-para-continuar-o-trabalho)
- [Estado atual do site](#estado-atual-do-site)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Página principal: seções e fundos](#página-principal-seções-e-fundos)
- [Páginas de case](#páginas-de-case)
- [Contato e formulário](#contato-e-formulário)
- [Projetos: como documentar e adicionar cases](#projetos-como-documentar-e-adicionar-cases)
- [Rodar localmente](#rodar-localmente)
- [Mudou classes do Tailwind? Recompile o CSS](#mudou-classes-do-tailwind-recompile-o-css)
- [Publicação](#publicação)
- [Guia de conteúdo](#guia-de-conteúdo)
- [Guia visual](#guia-visual)
- [Acessibilidade](#acessibilidade)
- [Como o site foi construído](#como-o-site-foi-construído)
- [Pendências](#pendências)

## Sobre

Site estático (HTML + Tailwind CSS + JavaScript puro) publicado pelo GitHub Pages. O CSS do Tailwind já vai compilado em `assets/css/tailwind.css`, então o que está na branch `main` é o que vai ao ar. Não há framework, servidor nem etapa de build no deploy.

O objetivo do site é dar credibilidade à prospecção de clientes (e-mail frio, LinkedIn e reuniões). Por isso ele só mostra trabalho real e tem um caminho de contato que funciona.

A GPurple fica no Rio de Janeiro e atende online clientes de todo o Brasil e do exterior. Não há tabela de preços nem faixa de prazo: cada projeto é personalizado, então primeiro se define o escopo e depois o preço e o prazo. O site não deve mostrar "a partir de R$".

Projeto original criado por [Dex](https://github.com/GZR-dex/Gpurple). Esta cópia foi reorganizada e redesenhada seção por seção a partir de outubro de 2026 (veja [Como o site foi construído](#como-o-site-foi-construído)).

## Quem faz

| Nome no site | Apelido | Papel |
| --- | --- | --- |
| Gabriel Barros | Gabe | UX, arquitetura e segurança ([LinkedIn](https://www.linkedin.com/in/gabrielmbarros/)) |
| Gabriel Zoppello | Dex | UI e conversão ([LinkedIn](https://www.linkedin.com/in/gabrielzoppello/)) |

Os dois aparecem na seção **Equipe** como quem lidera os projetos, com foto e LinkedIn. O texto do site nunca fala em "dupla" nem em "estúdio de duas pessoas": use "o time", "o estúdio", "a gente" ou "quem lidera o seu projeto", sem inventar número de pessoas nem membros que não existem.

Contato oficial: **gmbarros@gpurpledesign.com.br**. O endereço `contato@gpurple.com.br` não recebe e-mails e não deve ser usado. A GPurple não tem Instagram nem WhatsApp comercial por enquanto; o rodapé mostra o e-mail e o LinkedIn.

## Comece por aqui (para continuar o trabalho)

Se você está abrindo este repositório numa conversa nova para continuar o site:

1. Leia o [Estado atual do site](#estado-atual-do-site) e as [Pendências](#pendências) para saber o que já está pronto e o que falta.
2. Leia o [Guia de conteúdo](#guia-de-conteúdo) e o [Guia visual](#guia-visual): eles dizem o que pode ser publicado (principalmente: **nenhum case, número ou depoimento inventado**) e quais decisões de design já foram aprovadas.
3. Para mexer na seção de projetos, siga [Projetos: como documentar e adicionar cases](#projetos-como-documentar-e-adicionar-cases).
4. Trabalhe numa branch e abra um pull request para a `main`. Ao juntar o PR, o site atualiza sozinho. O Gabe gosta de ver uma prévia (capturas no desktop e no celular, sem o menu fixo do topo cobrindo as seções) antes de aprovar.
5. Se trocou ou adicionou classes do Tailwind em algum HTML, rode `npm run build` antes do commit.

## Estado atual do site

Tudo abaixo está na `main` e no ar (atualizado em 26/10/2026, até o PR [#33](https://github.com/Gmatheusux/Gpurple/pull/33)).

**Home**
- Abertura clara com o título "Seu negócio é bom. Seu site precisa provar isso.", o subtítulo "Desenhamos e programamos sites que…", os botões **Pedir análise** e **Ver projetos** e a loja do Orquidário numa janela de navegador, com dois pontos numerados que abrem notas de projeto.
- Projetos logo em seguida, num carrossel com três projetos (Orquidário Cantareira, Allp Fit Home e GPurple Lab).
- Dois painéis roxos arredondados alternando com seções claras: [O problema, Serviços], depois Processo e Equipe no claro, depois [Contato, Dúvidas frequentes] e o rodapé no claro.
- Contato em forma de e-mail ("Nova mensagem"), enviado pelo Formspree sem sair da página.
- Menu do topo com atalhos para as seções e menu em tela cheia; o atalho da seção visível fica marcado.

**Cases**
- `projetos/allp-fit.html`: case de UX longo (pesquisa, dores do usuário, proposta de valor, wireframes de baixa e alta, entrega).
- `projetos/orquidario-cantareira.html`: identidade visual e loja virtual, projeto em andamento.
- Os dois usam o estilo invertido da home: página escura com painéis claros e rodapé escuro.

**Materiais** (fora do menu, com `noindex`): apresentação para reuniões, modelo de e-mail com assinatura e a biblioteca de templates de e-mail (GPurple Lab, com layout próprio).

**Qualidade**: contraste AA em todo o texto, foco visível, alvos de toque dentro do mínimo, sem rolagem lateral de 360 a 2560 px, layout que cresce em telas ultrawide (a partir de 2200 px) e animações visíveis para todos os visitantes.

## Estrutura de pastas

```
.
├── index.html                      # Página principal (todas as seções da home)
├── projetos/
│   ├── orquidario-cantareira.html  # Case: Orquidário Cantareira (identidade e loja)
│   └── allp-fit.html               # Case de UX: app Allp Fit Home (modelo para cases longos)
├── materiais/                      # Materiais comerciais (fora do menu, com noindex)
│   ├── apresentacao.html           # Apresentação para reuniões (setas ← → navegam)
│   ├── email-corporativo.html      # Modelo de e-mail com assinatura
│   └── templates-email.html        # Biblioteca de templates (aparece em Projetos como GPurple Lab)
├── assets/
│   ├── css/
│   │   ├── styles.css              # Tokens de cor e o visual de cada seção (comentado por bloco)
│   │   ├── tailwind.css            # Gerado pelo `npm run build`, não editar à mão
│   │   └── templates-email.css     # Gerado pelo `npm run build`, só da página de templates
│   ├── js/main.js                  # Header ao rolar, notas da abertura, menu, seção ativa, carrossel e formulário
│   └── img/
│       ├── marca/                  # G 3D (imagem de compartilhamento) e logo em SVG
│       ├── equipe/                 # Fotos de Gabriel Barros e Gabriel Zoppello
│       ├── projetos/               # Imagens dos cases (capa, logo, mockup); allp-fit/ tem pasta própria
│       └── materiais/              # Imagens da apresentação
├── src/tailwind.css                # Entrada do Tailwind
├── tailwind.config.js              # Cores e fontes da marca (lê index.html e projetos/)
├── tailwind.templates.config.js    # Config separada da página de templates de e-mail
├── 404.html                        # Página de erro
├── .nojekyll                       # GitHub Pages serve os arquivos como estão
└── favicon.svg
```

Os manuais e relatórios internos (PDFs) ficam fora do repositório: o `.gitignore` bloqueia `*.pdf`.

## Página principal: seções e fundos

Cada seção do `index.html` começa com um comentário numerado (`<!-- 4. Serviços ... -->`) e tem o estilo próprio num bloco comentado do `styles.css`.

| # | Âncora | Seção | Fundo | Como é |
| --- | --- | --- | --- | --- |
| – | – | Header | – | Barra de ponta a ponta com atalhos para as seções e botão **Menu**, que abre um mapa em tela cheia. Sobre a abertura clara, a barra usa tinta escura; ao rolar, ganha fundo sólido. |
| 1 | `#hero` | Abertura | Claro | Título, subtítulo e botões à esquerda; à direita, a loja do Orquidário numa janela de navegador com dois pontos numerados. As notas abrem passando o mouse, com o teclado ou tocando no celular. Seta discreta embaixo indica que a página continua. |
| 2 | `#projetos` | Projetos | Claro | Carrossel: o projeto em destaque fica num banner escuro grande e os outros aparecem em miniaturas embaixo. Troca sozinho a cada 7 s, pausa com o mouse, com o foco do teclado ou com o botão "Pausar a troca automática", e retoma de onde parou. |
| 3 | `#problema` | O problema | Painel roxo 1 | Três cartões curtos, um por motivo de desistência: mini tela, momento, título e uma linha. |
| 4 | `#servicos` | Serviços | Painel roxo 1 | Mosaico; cada serviço diz qual problema de cima ele resolve. |
| 5 | `#processo` | Processo | Claro | Trilha de cartões escuros; cada etapa mostra o que o cliente recebe. |
| 6 | `#estudio` | Equipe | Claro | Manifesto à esquerda, Gabriel Barros e Gabriel Zoppello em linhas à direita, com foto e LinkedIn. |
| 7 | `#contato` | Contato | Painel roxo 2 | E-mail simulado com o formulário (veja [Contato e formulário](#contato-e-formulário)). |
| 8 | `#faq` | Dúvidas frequentes | Painel roxo 2 | Acordeão com a primeira resposta aberta, separado do Contato por uma linha. "Não achou sua pergunta?" fica depois das perguntas. |
| 9 | `#rodape` | Rodapé | Claro | Marca, links das seções, e-mail e LinkedIn. Os links escurecem no hover e no foco, como no menu do topo. |

**Painéis roxos** (`.painel-roxo`). A home alterna claro e roxo: duas seções no claro, duas num painel roxo, e assim por diante. Os painéis são cartões arredondados só um pouco mais largos que a coluna de conteúdo (`--painel-folga`), com uma margem clara até a borda da tela (`--painel-margem`). Eles **não** vão de ponta a ponta. A troca de cor é a borda do painel, sem faixa de passagem. Por dentro, cada painel tem um degradê só, do roxo médio (`--tom-1`) ao mais escuro (`--tom-3`), com um grão fino para não formar degraus.

Cada seção leva a classe `secao` (espaço de cima e de baixo, `--respiro`) e a do seu fundo (`fundo-claro` ou `fundo-escuro`). No menu, o atalho Serviços leva para Serviços e fica marcado também em O problema (atributo `data-secoes`).

**Etiqueta de seção.** Toda seção tem uma etiqueta acima do título (`.rotulo`), com o mesmo nome que aparece no menu (Projetos, O problema, Serviços, Processo, Equipe, Contato, Dúvidas frequentes). Mesma tipografia em todas, sem caixa alta, na cor de destaque. Os cases usam a mesma ideia (`.caso-rotulo`).

**Barras de janela.** As molduras de navegador (abertura, Contato e case do Orquidário) usam o mesmo roxo (`--tom-1`) e as bolinhas vermelha, amarela e verde de um navegador de verdade.

## Páginas de case

Os cases usam o **inverso da home**: a página é escura (abertura, seções soltas e rodapé) e alguns blocos ficam juntos num **painel claro** (`.painel-claro`), com o mesmo formato do painel roxo: cartão arredondado, um pouco mais largo que o conteúdo, sem ir de ponta a ponta. O rodapé é o mesmo da home, no escuro.

| Case | Painéis claros |
| --- | --- |
| Allp Fit | [O problema, As dores do usuário] e [Do rascunho à tela, Entrega] |
| Orquidário | [Desafio e abordagem, Galeria da marca] |

Dentro dos cases, as seções usam `caso-secao` com `caso-secao--claro`, `--escuro` ou `--medio`, e a cor passa de uma para a outra por uma faixa em degradê automática (`--faixa-passagem`).

A página de templates de e-mail (`materiais/templates-email.html`) mantém o layout próprio e não segue esse padrão.

## Contato e formulário

A seção Contato é um e-mail simulado ("Nova mensagem", com Para, Assunto e o texto "Olá, GPurple! Meu nome é…") em que as lacunas são os campos: nome, e-mail, site (se tiver) e o que a pessoa quer melhorar. Esse desenho foi escolhido pelo Gabe e deve ser mantido.

- O envio vai pelo **Formspree**, sem sair da página. O endereço do formulário fica no `action` do `<form data-contato-form>` no `index.html`, e as mensagens chegam no e-mail cadastrado na conta do Formspree.
- Se o `action` virar `PREENCHER`, o envio abre o e-mail da pessoa com os campos preenchidos (o código está em `assets/js/main.js`).
- Embaixo há o link "ou escreva do seu e-mail" como alternativa.
- O texto ao lado diz que a primeira conversa e a análise do site não têm custo e que o estúdio atende online todo o Brasil e o exterior.

## Projetos: como documentar e adicionar cases

### O que está publicado hoje

| Ordem no carrossel | Projeto | Página | Situação |
| --- | --- | --- | --- |
| 1 | Orquidário Cantareira: identidade visual e loja virtual, criadas do zero | `projetos/orquidario-cantareira.html` | Em andamento. Faltam mais telas da loja para completar o case. |
| 2 | Allp Fit Home: pesquisa, proposta de valor, arquitetura e wireframes de um app de treino | `projetos/allp-fit.html` | Entregue em 2023. A GPurple prestou o serviço de product design para a VM Pereira Design (cliente: Allp Fit Academia), com Gabriel Barros como Lead Product Designer; a pesquisa ouviu cerca de 150 usuários; o time de produção do cliente desenvolveu e publicou o app. Downloads e nota conferidos na Google Play em 25/05/2026. |
| 3 | GPurple Lab: templates de e-mail (projeto autoral) | `materiais/templates-email.html` | Publicado. |

Os cases antigos do site original (TechCorp e Elite Studio) eram fictícios e foram removidos. Novos projetos entram aqui conforme forem documentados.

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

`projetos/orquidario-cantareira.html` é o modelo curto e `projetos/allp-fit.html` o modelo longo. Cada bloco tem um comentário no HTML:

| Bloco | O que entra |
| --- | --- |
| `<head>` | `<title>`, `meta description` e as tags `og:` (título, descrição e imagem de compartilhamento, com a URL completa do site). |
| Header | A mesma barra da home, com volta para "Todos os projetos". Não precisa mudar. |
| Abertura (escuro) | Etiqueta com o nome do cliente, título curto (a ideia do projeto), uma frase de resumo e a ficha com **Status**, **Escopo** e **Segmento**. Embaixo, o mockup numa janela de navegador. |
| Painel claro | Desafio e abordagem (três passos numerados) e a galeria da marca. |
| CTA final (escuro) | Pergunta de fechamento, botão "Pedir análise" e o cartão "Próximo projeto". |
| Rodapé (escuro) | O mesmo da home. |

Se o projeto tiver resultado real, acrescente uma seção no mesmo padrão das outras (`<section class="caso-secao ...">` com um `.caso-container` dentro).

### Passo a passo para um case novo

1. Copie `projetos/orquidario-cantareira.html` (ou `allp-fit.html`, para um case longo) para `projetos/nome-do-cliente.html` (minúsculas, hífens, sem acento).
2. Coloque as imagens em `assets/img/projetos/` com o nome do cliente na frente: `cliente-capa.jpg`, `cliente-logo.jpg`, `cliente-mockup.png`. Exporte em JPG ou WebP com até ~300 KB (PNG só para o mockup com transparência). Um case com muitas telas pode ganhar uma pasta própria, como `assets/img/projetos/allp-fit/`.
3. Troque textos, imagens, `<title>`, `description` e tags `og:` da nova página. Dentro de `projetos/`, os caminhos começam com `../` (`../assets/img/projetos/...`).
4. No `index.html`, seção `#projetos`:
   - Dentro de `.carrossel-palco`, duplique um slide (`<div class="carrossel-slide" role="tabpanel" data-slide>` com a vitrine `<a class="project-feature vitrine">` dentro), troque o `id`, o `aria-labelledby`, o `href`, as imagens, o nome, o cliente e a descrição, e deixe o slide `hidden`. Imagem em pé usa `vitrine-mockup--retrato`.
   - Dentro de `.carrossel-miniaturas`, duplique uma miniatura (`<button role="tab" data-aba>`), troque o `id`, o `aria-controls` (o `id` do slide) e os textos. A ordem das miniaturas é a ordem do carrossel; a primeira começa selecionada.
   - Na página principal os caminhos começam com `./` (`./assets/img/projetos/...`).
5. Se usou classes do Tailwind que ainda não existiam no site, rode `npm run build`.
6. Abra o site local (veja [Rodar localmente](#rodar-localmente)) e confira no desktop e no celular.

### Conferir antes de publicar

- [ ] O cliente autorizou mostrar o trabalho (e o nome).
- [ ] Nenhum número, logo ou depoimento sem fonte. Status correto ("em andamento" ou "entregue").
- [ ] Textos seguem o [Guia de conteúdo](#guia-de-conteúdo): frases curtas, foco no cliente, botões com verbo de ação.
- [ ] Toda imagem tem `alt` descritivo (imagem decorativa leva `alt=""`).
- [ ] Imagens leves (até ~300 KB) e com `loading="lazy"` fora da primeira tela.
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

O Tailwind (3.4) lê `index.html` e tudo em `projetos/`. As páginas de `materiais/` usam CSS próprio ou o `templates-email.css`. A maior parte do visual está em `assets/css/styles.css`, que não precisa de build.

## Publicação

Em **Settings → Pages**, a fonte é *Deploy from a branch*, branch `main`, pasta `/ (root)`. Cada push na `main` atualiza o site em `https://gmatheusux.github.io/Gpurple/`. O andamento do deploy aparece na aba **Actions** (fluxo *pages build and deployment*); às vezes ele fica alguns minutos na fila do GitHub.

O domínio próprio já existe, mas só será ligado ao GitHub Pages no fim. Quando for, troque também as URLs das tags `og:`.

## Guia de conteúdo

O tom segue o Manual de Identidade Visual da GPurple (documento interno) e o guia [Tom de voz e melhorias na copy](https://claude.ai/code/artifact/2da5728d-33a8-44fb-9165-fab9f74ad803): um especialista conversando com o dono do negócio. Sempre "você" (nunca alternando com "te" ou "vocês"), frases curtas, sem gíria e sem jargão sem tradução.

- **Fale com o cliente, não sobre você.** "Você fala direto com quem lidera o seu projeto" em vez de "Nós possuímos uma equipe sênior".
- **Não fale do tamanho do time.** Nada de "dupla" ou "duas pessoas"; use "o time", "o estúdio" ou "quem lidera o seu projeto", sem inventar número de pessoas.
- **Botão diz o que a pessoa recebe, sem falar de preço.** "Pedir análise" no botão principal e "Falar com a gente" nos demais. Nunca "Clique aqui", "Enviar" nem "grátis" no botão: a análise sem custo é mencionada em texto, na área de contato e no FAQ.
- **Preço e prazo sob medida.** Não publique faixas de preço nem de prazo: o escopo vem primeiro.
- **Prova real ou nenhuma.** Só publique números, depoimentos e logos de clientes com autorização e dados verificáveis. Números ilustrativos levam o rótulo "Cenário ilustrativo".
- **Nada de escassez falsa.** Não use "apenas 2 vagas" se não for verdade.
- **Português do dia a dia.** Prefira "medir conversões" a "tagueamento server-side" no texto para o cliente; o termo técnico pode vir entre parênteses.
- **Sem cara de texto gerado.** Evite frases espelhadas ("bonitos para X, rápidos para Y"), trios automáticos ("design, tecnologia e estratégia"), o contraste "não é X, é Y" e rótulos vazios como "alto padrão", "boutique", "de ponta a ponta" e "soluções".
- **Texto longo em blocos.** Quebre explicações em frases curtas, itens ou cartões; o que importa fica visível sem precisar clicar.
- **Rótulos em caixa normal.** Etiquetas, rótulos e títulos pequenos com só a primeira letra maiúscula, nunca em CAIXA ALTA espaçada.

## Guia visual

Segue o Manual de Identidade Visual, com ajustes aprovados pelo Gabe ao longo de outubro de 2026 (listados abaixo).

### Cores da marca

| Token (`assets/css/styles.css`) | Cor | Uso |
| --- | --- | --- |
| `--color-brand-primary` | `#8B5CF6` Electric Purple | "G" do logo, fundos e ícones. Não usar em texto pequeno. |
| `--color-brand-primary-soft` | `#C4B5FD` | Texto roxo pequeno em fundo escuro (contraste AA). |
| `--color-brand-accent` | `#E8CFA0` Champanhe | Botões principais, frases-chave dos títulos, links de ação no escuro. |
| `--color-brand-volt` | `#D9F956` Volt Lime | Só o ponto final do logo (`gpurple.`); no claro, o ponto fica roxo escuro. |
| `--tom-1` a `--tom-3` | `#2A2150` → `#1A1536` → `#0E0B1C` | Degradê dos painéis roxos e barras de janela (`--tom-1`). |
| `--color-surface-light` | `#F4F2F8` | Fundo claro da home e painéis claros dos cases. |
| `--color-surface-dark` / `--color-surface-card` | `#0B0A14` / `#141124` | Página escura dos cases e cartões escuros. |

### Cores do texto

São quatro papéis, cada um com um valor para fundo escuro e outro para fundo claro, definidos no começo do `styles.css`. Todos passam o contraste AA sobre qualquer fundo da sua família, inclusive os degradês:

| Papel | Classe | No escuro | No claro |
| --- | --- | --- | --- |
| Título e texto forte | `.texto-titulo` | `#ffffff` | `#15121f` |
| Texto de leitura | `.texto-corpo` | `#cdc6e4` | `#4a4560` |
| Legendas e rótulos pequenos | `.texto-apoio` | `#b3a9d6` | `#5b5670` |
| Frase-chave, etiqueta de seção e links | `.texto-destaque` | `#e8cfa0` (Champanhe) | `#5b30d6` |

O escuro é o padrão; seções e cartões claros (`.fundo-claro`, `.caso-secao--claro`, o e-mail do Contato, as miniaturas do carrossel etc.) trocam os valores sozinhos. Não use cor solta no texto (`text-white`, `text-[#...]`): use a classe do papel ou `var(--texto-*)` no CSS.

### Tipografia

- **Títulos** em Montserrat 600/700 (classe `section-title`); texto em Inter. As duas vêm do Google Fonts. A Montserrat substituiu a Poppins em 19/10/2026, porque a Poppins é uma das fontes mais repetidas em sites gerados por IA.
- **Texto corrido em três tamanhos só**: 15 px para texto de apoio, 16 px para leitura e 18 px para os textos de abertura (subtítulo da home e `caso-lead` dos cases). Nada abaixo de 12 px.
- Altura de linha de 1,3 nos títulos de cartão (`h3`).
- **Uma frase-chave por tela** em cor de destaque, no máximo.

### Decisões aprovadas

- **Ordem e fundos da home**: abertura (claro), Projetos (claro), painel roxo [O problema, Serviços], claro [Processo, Equipe], painel roxo [Contato, Dúvidas], rodapé (claro).
- **Painéis arredondados**, um pouco mais largos que o conteúdo, nunca de ponta a ponta. Os cases usam o inverso (página escura, painéis claros, rodapé escuro).
- **Abertura com trabalho real** (19/10/2026): o G em órbita saiu, porque roxo com brilho sobre fundo preto é o retrato de site gerado por IA. Sobre o fundo claro, o botão principal fica em tinta escura e a frase-chave em roxo escuro `#5b30d6`, já que o Champanhe perde contraste.
- **Volt Lime fora dos botões** (16/10/2026), porque brigava com o roxo.
- **Sem brilho**: nada de glow ou manchas desfocadas. Cartões com superfície sólida, sem gradiente nem sombra roxa.
- **Animações para todos** (PR #25): elas tocam mesmo para quem desligou as animações no sistema. Não volte a colocar `prefers-reduced-motion` escondendo movimento. O carrossel continua com o botão de pausa.
- **Contato como e-mail simulado**, enviado pelo Formspree.
- No Tailwind, as cores da marca são variáveis CSS: use `bg-gpurple-accent`, mas não `bg-gpurple-accent/10` (o modificador de opacidade não funciona com variáveis). Para transparência, use um valor `rgba(...)` entre colchetes.

O manual da marca ainda cita o G 3D como visual da abertura, os botões em Volt Lime e a Poppins, e precisa ser atualizado.

## Acessibilidade

A auditoria de 26/10/2026 ([relatório](https://claude.ai/artifact/2shvLksNJFH2usd85cZkh8)) mediu o site e as correções entraram no PR #33:

- Contraste do texto entre 4,9:1 e 19,7:1 em todos os fundos da paleta; a linha tracejada dos campos do Contato passa o mínimo de 3:1 para componentes.
- Foco visível em todos os elementos; link "Pular para o conteúdo"; com o menu em tela cheia aberto, o resto da página fica fora do alcance do teclado e do leitor de tela.
- Alvos de toque dentro do critério 2.5.8 e nenhuma rolagem lateral de 360 a 2560 px.
- Carrossel com miniaturas funcionando como abas, pausa pelo foco do teclado e botão de pausa.

Ao medir contraste sobre degradês, não confie só na ferramenta: deixe o texto transparente e meça a cor do fundo numa captura de tela.

## Como o site foi construído

Cada etapa entrou na `main` por um pull request, onde estão as prévias e as decisões:

| PR | O que mudou |
| --- | --- |
| Commits diretos | Cópia do site do Dex, textos reescritos para o tom de portfólio, cases fictícios removidos, foto e LinkedIn do Gabe, novo e-mail de contato, prévias de compartilhamento e materiais internos fora dos buscadores. |
| [#1](https://github.com/Gmatheusux/Gpurple/pull/1)–[#7](https://github.com/Gmatheusux/Gpurple/pull/7) | Auditoria de UI (Champanhe nos botões, contraste, menu no celular), header novo com menu em tela cheia e todas as seções da home redesenhadas. |
| [#8](https://github.com/Gmatheusux/Gpurple/pull/8) | README como guia para continuar o site e documentar cases. |
| [#9](https://github.com/Gmatheusux/Gpurple/pull/9) | O problema com estrutura mais clara para quem não é de tecnologia. |
| [#10](https://github.com/Gmatheusux/Gpurple/pull/10) | Abertura com trabalho real (o Orquidário), copy nova e títulos em Montserrat. |
| [#13](https://github.com/Gmatheusux/Gpurple/pull/13) | Revisão seção a seção: Contato antes das Dúvidas, seção Formatos removida, menu com Serviços e Equipe. |
| [#14](https://github.com/Gmatheusux/Gpurple/pull/14) | Abertura com seta de rolagem. |
| [#15](https://github.com/Gmatheusux/Gpurple/pull/15)–[#18](https://github.com/Gmatheusux/Gpurple/pull/18) | Case de UX do Allp Fit Home, reorganizado, com título e subtítulos novos. |
| [#19](https://github.com/Gmatheusux/Gpurple/pull/19), [#20](https://github.com/Gmatheusux/Gpurple/pull/20) | Rótulos próprios nos cards de O problema e fim dos rótulos repetidos "O que fazemos". |
| [#11](https://github.com/Gmatheusux/Gpurple/pull/11) | Copy com tom mais humano; botões "Pedir análise" e "Falar com a gente". |
| [#12](https://github.com/Gmatheusux/Gpurple/pull/12) (via [#21](https://github.com/Gmatheusux/Gpurple/pull/21)) | Visual com menos sinais de site feito por IA. |
| [#22](https://github.com/Gmatheusux/Gpurple/pull/22) | Revisão de UI: passagem de cor entre seções, telas ultrawide, case Orquidário refeito, correções de foco e formulário de contato ligado ao Formspree. |
| [#23](https://github.com/Gmatheusux/Gpurple/pull/23) | Padrão de quatro cores de texto, Projetos logo depois da abertura, Contato em forma de e-mail, etiqueta igual em todas as seções e barras de janela com as bolinhas de navegador. |
| [#24](https://github.com/Gmatheusux/Gpurple/pull/24) | Home alternando claro e roxo em dois painéis arredondados; Processo, Equipe e rodapé no claro. |
| [#25](https://github.com/Gmatheusux/Gpurple/pull/25) | Animações visíveis para todos os visitantes. |
| [#26](https://github.com/Gmatheusux/Gpurple/pull/26) | Abertura: notas do Orquidário nos pontos 1 e 2 e mockup maior. |
| [#27](https://github.com/Gmatheusux/Gpurple/pull/27) | Cards de O problema enxutos: momento, título e uma linha. |
| [#28](https://github.com/Gmatheusux/Gpurple/pull/28) | Carrossel retoma de onde parou; banners com mais espaço. |
| [#29](https://github.com/Gmatheusux/Gpurple/pull/29) | Fim das menções a "dupla" e a estúdio de duas pessoas. |
| [#30](https://github.com/Gmatheusux/Gpurple/pull/30) | Subtítulo novo na abertura. |
| [#31](https://github.com/Gmatheusux/Gpurple/pull/31) | Links do rodapé escurecem no hover e no foco, como no menu do topo. |
| [#32](https://github.com/Gmatheusux/Gpurple/pull/32) | Cases no estilo invertido da home: página escura com painéis claros e rodapé escuro. |
| [#33](https://github.com/Gmatheusux/Gpurple/pull/33) | Correções da auditoria de acessibilidade e tipografia: rótulos em caixa normal, texto em 15/16/18 px, contraste dos campos, FAQ reorganizado. |

## Pendências

- [ ] Testar o envio do formulário de contato de verdade (mensagem chegando no e-mail do Formspree)
- [ ] WhatsApp comercial e, se fizer sentido, link de agendamento ao lado do e-mail no Contato
- [ ] Depoimentos de clientes (prova social), com autorização, nome e cargo
- [ ] Mais telas da loja do Orquidário Cantareira para completar o case
- [ ] Documentar os outros projetos e publicar como cases (veja [Projetos](#projetos-como-documentar-e-adicionar-cases))
- [ ] Atualizar o Manual de Identidade Visual: botões em Champanhe, títulos em Montserrat e a abertura clara com trabalho real
- [ ] Domínio próprio apontando para o GitHub Pages (no fim), trocando também as URLs das tags `og:`
