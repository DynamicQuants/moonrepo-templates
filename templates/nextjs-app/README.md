# Next.js Application Template

This template is a starting point for a [Next.js](https://nextjs.org/docs) application. It includes a ad-hoc setup for [Tailwind CSS](https://tailwindcss.com/), [Jest](https://jestjs.io/), [Playwright](https://playwright.dev/), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), and [Typescript](https://www.typescriptlang.org/), using the [Dynamic Quants config tools](https://github.com/DynamicQuants/config-tools) package.

## How to use this template

### Using degit

```bash
npx degit dynamic-quants/templates/nextjs-app my-project
```

### Using Moonrepo

Add the template to your project:

```yml
generator:
  templates:
    - 'git://github.com/DynamicQuants/moonrepo-templates/templates#main'
```

Then generate the project:

```bash
moon repo generate nextjs-app
```

## How to run the project

```bash
pnpm install
pnpm dev
```
