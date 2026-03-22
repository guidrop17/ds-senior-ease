# DS Senior Ease

Design System em Angular (standalone) para o ecossistema Senior Ease, com foco em:

- Arquitetura Atomic Design
- Acessibilidade (a11y)
- Responsividade (incluindo navegacao mobile com menu inferior)
- Biblioteca reutilizavel (`ui`) + app de validacao (`playground`) + Storybook

## Visao Geral

Este workspace contem dois projetos principais:

- `ui`: biblioteca de componentes standalone, organizada por Atomic Design
- `playground`: aplicacao de demonstracao para testar os componentes em cenarios reais

O `ui` tambem possui Storybook para documentacao visual e validacao isolada dos componentes.

## Stack

- Angular `21.x`
- Storybook `10.x` (`@storybook/angular`)
- SCSS com tokens e tema global
- Font Awesome (`@fortawesome/*`) para icones no DS

## Estrutura do Projeto

```text
projects/
  ui/
    .storybook/
    src/
      lib/
        atoms/
        molecules/
        organisms/
        templates/
      stories/
        atoms/
        molecules/
        organisms/
        templates/
      styles/
        tokens/
        theme.scss
      public-api.ts
  playground/
    src/
      app/
      styles.scss
```

## Arquitetura Atomic Design (UI)

Componentes em `projects/ui/src/lib`:

Atoms:
- `ui-button`
- `ui-icon`
- `ui-avatar`
- `ui-badge`
- `ui-text`
- `ui-divider`

Molecules:
- `ui-nav-item`
- `ui-stat`
- `ui-list-item`
- `ui-user-info`

Organisms:
- `ui-sidebar`
- `ui-header`
- `ui-hero-card`
- `ui-stats-grid`
- `ui-agenda-list`
- `ui-materials-list`

Templates:
- `ui-dashboard-layout`

Padrao por componente:

- `component.ts`
- `component.html`
- `component.scss`
- `index.ts`

## Tokens e Tema

Tokens em `projects/ui/src/styles/tokens`, agregados no `theme.scss`:

- `colors.tokens.scss`
- `spacing.tokens.scss`
- `typography.tokens.scss`
- `radius.tokens.scss`
- `shadow.tokens.scss`

Diretrizes:

- valores de cor, espacamento, tipografia, raio e sombra via CSS variables
- sem hardcode visual nos componentes
- tema aplicado globalmente no Playground e no Storybook

## Exportacoes da Biblioteca

Arquivo publico: `projects/ui/src/public-api.ts`

Exporta apenas barrels:

- `./lib/atoms`
- `./lib/molecules`
- `./lib/organisms`
- `./lib/templates`

Sem deep imports no consumo externo.

## Playground

O Playground demonstra o DS completo em uma unica tela (`app.component`), incluindo:

- uso de template (`ui-dashboard-layout`)
- navegacao lateral/rodape responsiva (`ui-sidebar`)
- catalogo de atoms, molecules e organisms

Estilo global:

- `projects/playground/src/styles.scss` importa `@use 'styles/theme';`

Config importante no `angular.json`:

- `stylePreprocessorOptions.includePaths` inclui `projects/ui/src`

## Storybook

Config em `projects/ui/.storybook`.

- stories organizadas por Atomic em `projects/ui/src/stories/*`
- addon ativo: `@storybook/addon-a11y`
- addon ativo: `@storybook/addon-docs`
- alias `ui` resolvido no tsconfig: `"ui": ["../src/public-api.ts"]`

## Acessibilidade e Responsividade

Este DS foi preparado para o contexto do Senior Ease (PWA com foco em acessibilidade):

- componentes com suporte a atributos ARIA relevantes
- contraste e foco visivel
- tipografia e temas auxiliares para legibilidade
- layout responsivo
- no mobile, o menu principal (`ui-sidebar`) migra para a regiao inferior da tela

## Como Rodar

Instalar dependencias:

```bash
npm install
```

Rodar playground:

```bash
npm run serve:playground
```

ou

```bash
npx ng serve playground
```

Abrir: `http://localhost:4200`

Rodar Storybook:

```bash
npm run storybook
```

ou

```bash
npx ng run ui:storybook
```

Abrir: `http://localhost:6006`

Build da biblioteca `ui`:

```bash
npm run build:ui
```

Build do playground:

```bash
npm run build:playground
```

Build estatico do Storybook:

```bash
npx ng run ui:build-storybook
```

## Scripts Disponiveis

Do `package.json` raiz:

- `npm run start`
- `npm run build`
- `npm run watch`
- `npm run test`
- `npm run storybook`
- `npm run build:ui`
- `npm run build:playground`
- `npm run serve:playground`

## Consumo da UI

Importe componentes via pacote `ui`:

```ts
import { ButtonComponent, SidebarComponent } from '@senior-ease/ui';
```

Evite importar por caminhos internos da pasta `lib`.

## CI/CD (GitHub Actions -> npm)

Workflow: `.github/workflows/ui-ci-cd.yml`

- CI roda em `pull_request` e `push` na branch `main`
- Publish roda automaticamente quando uma tag `ui-v*` e enviada
- Exemplo de tag valida: `ui-v0.1.0`

### Secret necessario

No repositorio GitHub, configure:

- `NPM_TOKEN`: token de automacao do npm com permissao de publish

### Fluxo de release

1. Atualize a versao em `projects/ui/package.json`
2. Commit e push para `main`
3. Crie e envie a tag da mesma versao:

```bash
git tag ui-v0.1.0
git push origin ui-v0.1.0
```

O workflow valida que a tag e a versao do `projects/ui/package.json` sao iguais antes de publicar.
