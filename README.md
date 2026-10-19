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
| Gabriel Zopello | Dex | UI e conversão |

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
│   └── orquidario-cantareira.html  # Case: Orquidário Cantareira (modelo para novos cases)
├── materiais/                      # Materiais comerciais (fora do menu, com noindex)
│   ├── apresentacao.html           # Apresentação para reuniões (setas ← → navegam)
│   ├── email-corporativo.html      # Modelo de e-mail com assinatura
│   └── templates-email.html        # Biblioteca de templates (aparece em Projetos como GPurple Lab)
├── assets/
│   ├── css/
│   │   ├── styles.css              # Tokens de cor e o visual de cada seção (comentado por seção)
│   │   ├── tailwind.css            # Gerado pelo `npm run build`, não editar à mão
│   │   └── templates-email.css     # Gerado pelo `npm run build`, só da página de templates
│   ├── js/main.js                  # Header ao rolar, menu em tela cheia, G que segue o mouse, seção ativa
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
| 1 | `#hero` | Abertura | G sólido do logo com volume discreto, dentro de anéis champanhe em órbita. Segue o mouse devagar. Quem reduz movimento no sistema vê só um esmaecer curto. |
| 2 | `#problema` | O problema | Três cartões, cada um com uma mini tela mostrando onde o visitante desiste. |
| 3 | `#servicos` | Serviços | Mosaico; cada serviço diz qual problema de cima ele resolve. |
| 4 | `#projetos` | Projetos | Case principal em vitrine (capa de fundo, logo e mockup) e projetos menores em faixas. |
| 5 | `#processo` | Processo | Trilha de cartões, cada etapa mostra o que o cliente recebe. |
| 6 | `#formatos` | Formatos | Comparativo Essencial, Growth e Parceria (tabela no desktop, blocos no celular). |
| 7 | `#estudio` | Estúdio | Manifesto à esquerda, Gabe e Dex em linhas à direita. |
| 8 | `#faq` | Perguntas frequentes | Acordeão com a primeira resposta aberta. |
| 9 | `#contato` | Contato e rodapé | Modelo do e-mail visível antes do clique; o botão abre o e-mail com o mesmo texto. |

## Projetos: como documentar e adicionar cases

### O que está publicado hoje

| Onde aparece | Projeto | Página | Situação |
| --- | --- | --- | --- |
| Vitrine (destaque) | Orquidário Cantareira: identidade visual e loja virtual, criadas do zero | `projetos/orquidario-cantareira.html` | Em andamento. Falta a autorização do cliente para exibir. |
| Faixa | GPurple Lab: templates de e-mail (projeto autoral) | `materiais/templates-email.html` | Publicado. |

O Orquidário é o único projeto de cliente no site. Os cases antigos do site original (TechCorp e Elite Studio) eram fictícios e foram removidos. Novos projetos entram aqui conforme forem documentados.

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
| Header | Volta para "Todos os projetos", logo e botão "Iniciar um projeto". Não precisa mudar. |
| Hero do projeto | Eyebrow com o nome do cliente, título curto (a ideia do projeto), uma frase de resumo e a ficha com **Status**, **Escopo** e **Segmento**. A capa entra como fundo. |
| Desafio e abordagem | "O desafio" em dois parágrafos; "A abordagem" com três passos numerados. |
| Galeria | Mockup grande no topo e duas imagens lado a lado (logo e direção de arte). |
| CTA final | Pergunta de fechamento e botão "Iniciar um projeto". Pode manter o texto. |

Se o projeto tiver resultado real, acrescente uma seção entre a abordagem e a galeria, no mesmo padrão das outras (`<section class="w-full py-24 bg-gpurple-dark ...">`).

### Passo a passo para um case novo

1. Copie `projetos/orquidario-cantareira.html` para `projetos/nome-do-cliente.html` (minúsculas, hífens, sem acento).
2. Coloque as imagens em `assets/img/projetos/` com o nome do cliente na frente: `cliente-capa.jpg`, `cliente-logo.jpg`, `cliente-mockup.png`. Exporte em JPG ou WebP com até ~300 KB (PNG só para o mockup com transparência).
3. Troque textos, imagens, `<title>`, `description` e tags `og:` da nova página. Dentro de `projetos/`, os caminhos começam com `../` (`../assets/img/projetos/...`).
4. No `index.html`, seção `#projetos`:
   - **Projeto menor:** duplique uma faixa (`<a class="projeto-faixa">`) dentro de `.projetos-grid`, aponte o `href` para a nova página e troque miniatura, etiqueta, título e frase.
   - **Novo destaque:** o case mais forte fica na vitrine (`<a class="project-feature vitrine">`), com capa de fundo, logo, três fatos e o mockup. Se outro projeto passar a ser o destaque, o Orquidário vira uma faixa.
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

### Ajustes conhecidos da página de case

A página do Orquidário ainda tem detalhes do site original que podem ser acertados quando a documentação dos projetos for retomada:

- O header é a cápsula antiga, diferente da barra nova da home.
- A galeria usa fundo `bg-zinc-950` e o CTA final tem um brilho desfocado (`blur-[120px]`), fora do guia visual (sem manchas desfocadas nas seções).
- O brilho do CTA usa `bg-gpurple-primary/10`, que não funciona com as cores da marca (veja a nota no [Guia visual](#guia-visual)).

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

O tom segue o Manual de Identidade Visual da GPurple (documento interno): autoridade técnica sem pedantismo, frases curtas e foco no resultado do cliente.

- **Fale com o cliente, não sobre você.** "Você fala direto com quem faz" em vez de "Nós possuímos uma equipe sênior".
- **Verbo de ação nos botões, sem falar de preço.** "Iniciar um projeto", "Ver o case do Orquidário", "Contar sobre o projeto". Nunca "Clique aqui", "Enviar" nem "grátis" no botão: a análise sem custo é mencionada uma vez, em texto, na área de contato e no FAQ.
- **Prova real ou nenhuma.** Só publique números, depoimentos e logos de clientes com autorização e dados verificáveis. Números ilustrativos levam o rótulo "Cenário ilustrativo".
- **Nada de escassez falsa.** Não use "apenas 2 vagas" se não for verdade.
- **Português do dia a dia.** Prefira "medir conversões" a "tagueamento server-side" no texto para o cliente; o termo técnico pode vir entre parênteses.
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
| `--color-surface-light` | `#F4F2F8` | Seções claras (Projetos e Estúdio). |
| `--color-text-secondary` | `#B4BCCB` | Texto de leitura sobre fundo escuro. |

- **Títulos** em Poppins 600/700 (classe `section-title`), texto em Inter 16 px ou mais. Nada abaixo de 12 px.
- **Uma frase-chave por tela** em Champanhe, no máximo.
- **Rótulo acima do título** (`.rotulo`): só onde ajuda a se localizar (Projetos, Perguntas frequentes, Contato), sem caixa alta e sem cor de marca. Cartões usam superfície sólida, sem gradiente nem sombra roxa. Referência: o documento "o que evitar para não parecer site feito por IA", no projeto.
- **Brilho e animação** só no G da abertura. Brilhos e sombras sutis; sem manchas desfocadas nem sombras neon nas seções.
- **Símbolo da abertura** (19/10/2026): o G de vidro 3D saiu. A abertura usa o G geométrico do logo, sólido e com volume discreto, dentro de anéis finos em órbita. O manual da marca ainda cita o G 3D como visual da abertura e os botões em Volt Lime, e precisa ser atualizado.
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
- [ ] Atualizar o Manual de Identidade Visual: botões em champanhe e o G sólido na abertura
