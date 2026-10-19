<p align="center">
  <img src="assets/img/marca/g-3d.jpg" alt="Símbolo G da GPurple" width="120">
</p>

<h1 align="center">gpurple<span>.</span> studio</h1>

<p align="center">
  Site portfólio da GPurple, estúdio boutique de design e tecnologia.<br>
  <a href="https://gmatheusux.github.io/Gpurple/"><strong>Ver o site no ar →</strong></a>
</p>

---

## Sobre

Site estático (HTML + Tailwind CSS + JavaScript puro) publicado pelo GitHub Pages. O CSS do Tailwind já vai compilado em `assets/css/tailwind.css`, então o que está na branch `main` é o que vai ao ar.

Projeto original criado por [Dex](https://github.com/GZR-dex/Gpurple). Textos revisados com foco em copywriting e UX writing para o tom de portfólio de estúdio.

## Estrutura

```
.
├── index.html                      # Página principal (portfólio)
├── projetos/
│   └── orquidario-cantareira.html  # Case: Orquidário Cantareira
├── materiais/                      # Materiais comerciais (não aparecem no menu)
│   ├── apresentacao.html           # Apresentação para reuniões (setas ← → navegam)
│   ├── email-corporativo.html      # Modelo de e-mail com assinatura
│   └── templates-email.html        # Biblioteca de templates de e-mail
├── assets/
│   ├── css/styles.css              # Tokens de cor, efeitos e animações
│   ├── js/main.js                  # Arrastar para rolar no carrossel de projetos
│   └── img/
│       ├── marca/                  # Símbolo 3D e logo
│       ├── equipe/                 # Fotos dos sócios
│       ├── projetos/               # Imagens dos cases
│       └── materiais/              # Imagens da apresentação
├── src/tailwind.css                # Entrada do Tailwind (gera assets/css/tailwind.css)
├── tailwind.config.js              # Cores e fontes da marca (site)
├── tailwind.templates.config.js    # Config separada da página de templates de e-mail
├── 404.html                        # Página de erro
└── favicon.svg
```

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

## Publicação

Em **Settings → Pages**, a fonte é *Deploy from a branch*, branch `main`, pasta `/ (root)`. Cada push na `main` atualiza o site em alguns minutos.

## Guia de conteúdo

O tom segue o Manual de Identidade Visual da GPurple (documento interno): autoridade técnica sem pedantismo, frases curtas e foco no resultado do cliente.

- **Fale com o cliente, não sobre você.** "Você fala direto com quem faz" em vez de "Nós possuímos uma equipe sênior".
- **Verbo de ação nos botões, sem falar de preço.** "Iniciar um projeto", "Ver o case do Orquidário", "Contar sobre o projeto". Nunca "Clique aqui", "Enviar" nem "grátis" no botão: a análise sem custo é mencionada uma vez, em texto, na área de contato e no FAQ.
- **Prova real ou nenhuma.** Só publique números, depoimentos e logos de clientes com autorização e dados verificáveis. Números ilustrativos levam o rótulo "Cenário ilustrativo".
- **Nada de escassez falsa.** Não use "apenas 2 vagas" se não for verdade.
- **Português do dia a dia.** Prefira "medir conversões" a "tagueamento server-side" no texto para o cliente; o termo técnico pode vir entre parênteses.

## Guia visual

Segue o Manual de Identidade Visual, com um ajuste aprovado em 16/10/2026: o **Volt Lime** saiu dos botões porque brigava com o roxo.

| Token (`assets/css/styles.css`) | Cor | Uso |
| --- | --- | --- |
| `--color-brand-primary` | `#8B5CF6` Electric Purple | "G" do logo, fundos e ícones. Não usar em texto pequeno. |
| `--color-brand-primary-soft` | `#C4B5FD` | Etiquetas e texto roxo pequeno (contraste AA). |
| `--color-brand-accent` | `#E8CFA0` Champanhe | Botões principais, frases-chave dos títulos, links de ação. |
| `--color-brand-volt` | `#D9F956` Volt Lime | Só o ponto final do logo (`gpurple.`). |
| `--color-surface-dark` / `--color-surface-card` | `#0B0A14` / `#141124` | Fundos das seções, alternados. |
| `--color-surface-light` | `#F4F2F8` | Seção clara (Projetos). |
| `--color-text-secondary` | `#B4BCCB` | Texto de leitura sobre fundo escuro. |

- **Títulos** em Poppins 600/700 (classe `section-title`), texto em Inter 16 px ou mais. Nada abaixo de 12 px.
- **Uma frase-chave por tela** em Champanhe, no máximo.
- **Brilho e animação** só no G da abertura. Sem manchas desfocadas nem sombras neon nas seções.
- **Símbolo da abertura** (19/10/2026): o G de vidro 3D saiu. A abertura usa o G geométrico do logo, sólido e com volume discreto, dentro de anéis finos em órbita. O manual da marca ainda cita o G 3D como visual da abertura e precisa ser atualizado.
- No Tailwind, as cores da marca são variáveis CSS: use `bg-gpurple-accent`, mas não `bg-gpurple-accent/10` (o modificador de opacidade não funciona com variáveis). Para transparência, use um valor `rgba(...)` entre colchetes.

## Pendências antes de prospectar

- [ ] Foto do Dex na seção **Estúdio** (hoje há um monograma no lugar)
- [ ] LinkedIn do Dex, se ele quiser aparecer
- [ ] WhatsApp e link de agendamento (Cal.com ou Calendly) ao lado do e-mail, na seção de contato
- [ ] Criar `contato@` no domínio e trocar o e-mail de contato (hoje vai para gmbarros@gpurpledesign.com.br)
- [ ] Autorização do Orquidário Cantareira para exibir o case
- [ ] Novos cases, com resultados reais, conforme os projetos forem entregues
- [ ] Domínio próprio (ex.: `gpurpledesign.com.br`) apontando para o GitHub Pages

## Como adicionar um novo case

1. Copie `projetos/orquidario-cantareira.html` para `projetos/nome-do-cliente.html` e troque textos e imagens.
2. Coloque as imagens em `assets/img/projetos/` com nomes em minúsculas e hífens (`cliente-capa.jpg`). Exporte em JPG ou WebP com até ~300 KB.
3. No `index.html`, duplique um card dentro de `.projetos-grid` (seção `#projetos`) e aponte o `href` para a nova página. O case mais forte fica no bloco grande acima da grade.
