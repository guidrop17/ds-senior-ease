# @senior-ease/ui

Angular UI library do Design System Senior Ease.

## Instalacao

```bash
npm install @senior-ease/ui
```

Peer dependencies esperadas no app consumidor:

- `@angular/common`
- `@angular/core`
- `@fortawesome/angular-fontawesome`
- `@fortawesome/fontawesome-svg-core`
- `@fortawesome/free-solid-svg-icons`

## Uso Basico

```ts
import { ButtonComponent } from '@senior-ease/ui';
```

## Build da Biblioteca

No workspace raiz:

```bash
npm run build:ui
```

Saida: `dist/ui`

## Publicacao no NPM

No workspace raiz:

```bash
npm run publish:ui
```

Esse script faz:

1. build da lib
2. `npm publish ./dist/ui --access public`

## Versao (release)

Antes de publicar nova versao:

```bash
npm version patch --prefix projects/ui
```

Opcoes:

- `patch` para correcao (`0.1.0 -> 0.1.1`)
- `minor` para nova feature (`0.1.0 -> 0.2.0`)
- `major` para breaking change (`0.1.0 -> 1.0.0`)
