# Skid Power

Site institucional e catalogo tecnico da Skid Power, desenvolvido em Next.js para apresentar linhas industriais de fittings, selagem e cotacao comercial com uma experiencia visual de alto impacto.

O projeto combina uma home split-screen, catalogo interativo da linha S68 Dupla-Anilha, configurador de medidas, lista de cotacao persistida no navegador e uma pagina dedicada para a parceria INPRO-SEAL.

## Visao Geral

Skid Power e uma aplicacao web em portugues do Brasil focada em produtos industriais de precisao. A interface foi desenhada para transmitir robustez tecnica sem perder clareza comercial: imagens grandes, contraste forte, navegacao simples e informacoes de engenharia acessiveis.

Principais fluxos:

- Home com divisao entre `Conexoes Dupla-Anilha` e `Selagem industrial`.
- Pagina de fittings com familias de produto: conexoes, valvulas, tubings, flanges e skid solutions.
- Pagina `/fittings/conexoes` com hero comparativo entre desenho tecnico e produto real.
- Configurador da peca S68 com selecao de OD, tipo de rosca, rosca e quantidade.
- Tabela tecnica com SKUs e cotas `D`, `W`, `N`, `L` e `I`.
- Carrinho/lista de cotacao com persistencia local.
- Formulario de cotacao que gera email pre-preenchido para vendas.
- Pagina `/selagem` com bloco de distribuidor oficial INPRO-SEAL.

## Stack

- Next.js 16 com App Router
- React 19
- TypeScript
- Tailwind CSS 4
- CSS Modules para experiencias visuais especificas
- Lucide React para icones
- Geist Sans e Geist Mono

## Estrutura

```text
src/
  app/
    page.tsx                    # Home split-screen
    fittings/                   # Rotas de familias de fittings
    fittings/conexoes/page.tsx  # Catalogo S68 Dupla-Anilha
    selagem/page.tsx            # Pagina INPRO-SEAL / selagem
    cotacao/page.tsx            # Revisao e envio de cotacao
  components/
    cart/                       # Provider, botao e drawer da cotacao
    catalog/                    # Hero, seletor e tabela S68
    hero/                       # Split-screen tecnico/produto real
    layout/                     # Header e footer
    sections/                   # Secoes comerciais da pagina de produto
    splits/                     # Home e paginas de categorias
    ui/                         # Componentes pequenos reutilizaveis
  hooks/
    useSlider.ts                # Controle robusto do comparador split
  lib/
    specs.ts                    # Catalogo S68, materiais e badges
    mailto.ts                   # Geracao do email de cotacao
    cart-types.ts               # Tipos da lista de cotacao
public/
  images/                       # Logos, renders e imagens de produto
```

## Rotas

| Rota | Descricao |
| --- | --- |
| `/` | Home com split entre fittings e selagem industrial |
| `/fittings` | Hub das familias de fittings |
| `/fittings/conexoes` | Catalogo tecnico e configurador S68 |
| `/fittings/valvulas` | Pagina de valvulas em breve |
| `/fittings/tubings` | Pagina de tubings em breve |
| `/fittings/flange` | Pagina de flanges em breve |
| `/fittings/skid-solutions` | Pagina de skid solutions em breve |
| `/selagem` | Pagina de selagem industrial e INPRO-SEAL |
| `/cotacao` | Revisao da lista e envio de cotacao por email |

## Destaques de UX/UI

- Split-screen da home com imagens imersivas e card compacto de distribuidor oficial INPRO-SEAL.
- Logo Skid Power em placa escura centralizada para boa leitura sobre os paineis.
- Header dinamico na pagina S68: a navegacao acompanha o split visual, alternando contraste entre area tecnica e produto real.
- Slider do S68 com suporte a mouse, touch e teclado.
- Card "Configure sua peca" posicionado sobre o hero, com selecoes rapidas e resumo do SKU.
- CTA de cotacao sempre conectado ao carrinho global.
- Layout responsivo com versao mobile simplificada e sem sobreposicoes criticas.

## Catalogo S68

O catalogo S68 esta em `src/lib/specs.ts` e contem os dados de engenharia usados pelo configurador e pela tabela:

- `sku`
- diametro externo do tubo (`tuboOd`)
- rosca
- cotas `D`, `W`, `N`, `L` e `I`

O produto base e descrito como:

- Familia: Industrial Fittings
- Nome: Dupla-Anilha
- Codigo: S68
- Material: Aco inox AISI 316L
- Acabamento: polido espelhado
- Norma: ISO 8434-1

## Cotacao

A aplicacao nao depende de backend para cotacao. O fluxo funciona assim:

1. O usuario configura um SKU na pagina `/fittings/conexoes`.
2. O item e adicionado a lista de cotacao pelo contexto de carrinho.
3. A lista fica persistida localmente no navegador.
4. Em `/cotacao`, o usuario revisa quantidades e preenche seus dados.
5. O sistema abre o cliente de email com uma mensagem pre-preenchida para `vendas@skidpower.com`.

Esse modelo reduz complexidade operacional e permite publicar o site em ambientes estaticos/edge sem banco de dados.

## Como Rodar

Instale as dependencias:

```bash
npm install
```

Rode o ambiente de desenvolvimento:

```bash
npm run dev
```

Acesse:

```text
http://localhost:3000
```

## Scripts

```bash
npm run dev      # inicia o Next em modo desenvolvimento com Turbopack
npm run build    # gera build de producao
npm run start    # serve o build de producao
npm run lint     # lint configurado no projeto
```

## Build

O projeto foi validado com:

```bash
npm run build
```

Resultado esperado: compilacao Next.js concluida com todas as rotas prerenderizadas.

## Assets

Os assets publicos ficam em `public/images`:

- `logo.png`: logo Skid Power
- `inpro.svg`: logo INPRO-SEAL
- `fittings.png`, `connectors.png`, `selagem.webp` e demais imagens de categorias
- `s68-technical.png`: desenho tecnico do S68
- `s68-realistic.png`: render/produto realista do S68

## Boas Praticas do Repo

O `.gitignore` evita subir:

- `node_modules`
- `.next`
- builds e caches
- arquivos `.env`
- artefatos TypeScript
- copias locais de trabalho

Isso mantem o repositorio leve, reprodutivel e pronto para deploy.

## Deploy

O projeto e compatavel com Vercel e outros ambientes que suportem Next.js.

Fluxo recomendado:

1. Conectar o repositorio GitHub na Vercel.
2. Usar `npm install` como install command.
3. Usar `npm run build` como build command.
4. Publicar a partir da branch `main`.

## Licenca

Projeto privado da Skid Power. Uso, copia ou distribuicao dependem de autorizacao dos responsaveis pelo projeto.
