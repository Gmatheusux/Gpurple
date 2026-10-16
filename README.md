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
│       ├── projetos/               # Imagens dos cases
│       └── materiais/              # Imagens da apresentação
├── src/tailwind.css                # Entrada do Tailwind (gera assets/css/tailwind.css)
├── tailwind.config.js              # Cores e fontes da marca
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
npm run build   # ou npm run dev para recompilar enquanto edita
```

## Publicação

Em **Settings → Pages**, a fonte é *Deploy from a branch*, branch `main`, pasta `/ (root)`. Cada push na `main` atualiza o site em alguns minutos.

## Guia de conteúdo

O tom segue o Manual de Identidade Visual da GPurple (documento interno): autoridade técnica sem pedantismo, frases curtas e foco no resultado do cliente.

- **Fale com o cliente, não sobre você.** "Você fala direto com quem faz" em vez de "Nós possuímos uma equipe sênior".
- **Verbo de ação nos botões.** "Pedir diagnóstico grátis", "Ver projetos". Nunca "Clique aqui" ou "Enviar".
- **Prova real ou nenhuma.** Só publique números, depoimentos e logos de clientes com autorização e dados verificáveis. Números ilustrativos levam o rótulo "Cenário ilustrativo".
- **Nada de escassez falsa.** Não use "apenas 2 vagas" se não for verdade.
- **Português do dia a dia.** Prefira "medir conversões" a "tagueamento server-side" no texto para o cliente; o termo técnico pode vir entre parênteses.

## Pendências antes de prospectar

- [ ] Fotos reais dos sócios na seção **Estúdio** (hoje há um monograma no lugar)
- [ ] Links do Instagram e LinkedIn no rodapé (estão ocultos até ter as URLs)
- [ ] Confirmar se o e-mail `contato@gpurple.com.br` já recebe mensagens
- [ ] Autorização do Orquidário Cantareira para exibir o case
- [ ] Novos cases, com resultados reais, conforme os projetos forem entregues
- [ ] Domínio próprio (`gpurple.com.br`) apontando para o GitHub Pages

## Como adicionar um novo case

1. Copie `projetos/orquidario-cantareira.html` para `projetos/nome-do-cliente.html` e troque textos e imagens.
2. Coloque as imagens em `assets/img/projetos/` com nomes em minúsculas e hífens (`cliente-capa.jpg`). Exporte em JPG ou WebP com até ~300 KB.
3. No `index.html`, duplique um card dentro de `#portfolio-slider` e aponte o `href` para a nova página.
