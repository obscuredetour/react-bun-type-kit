# React + Bun + TypeScript

This template provides a minimal setup to get React up and running with TypeScript. It includes a basic project structure, ESLint configuration, and a few plugins to get you started. The project is set up to use [Bun](https://bun.sh/) as the package manager and build tool, but you can also use [Docker](https://www.docker.com/) to run the application.

This template is intended to be a starting point for new projects. It is not meant to be a full-fledged application, but rather a starting point for you to build upon. Feel free to modify the project structure, add new plugins, or remove existing ones to suit your needs.

This template's main tools are:
- React is used as the front-end framework.
- Bun is used as the package manager and build tool.
- TypeScript is used as the programming language.
- Vite is used as a development-only tool for HMR and live server functionality.

## Table of contents
- [Getting started](#getting-started)
- [Plugins & Features](#plugins--features)
- [Optional features](#optional-features)
- [Development](#development)
  - [.env file](#env-file)
- [Production](#production)
- [Expanding the ESLint configuration](#expanding-the-eslint-configuration)

## Getting started

To get started, clone this repository. Depending on your preference, you can use either [Bun](https://bun.sh/) or [Docker](https://www.docker.com/) to run the application.

## Plugins & Features

Currently, this environment uses the following plugins:

- [bun](https://bun.sh/) as the package manager and build tool
- [vite](https://vitejs.dev/) as a development-only tool for HMR and live server functionality
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@react-router-dom](https://reactrouter.com/web/guides/quick-start) for routing
- [@tailwindcss](https://tailwindcss.com/) for styling
- [@typescript-eslint/eslint-plugin](https://typescript-eslint.io/) for linting
- [@typescript-eslint/parser](https://typescript-eslint.io/packages/parser/) for parsing TypeScript

There are more, but these are the main ones.

## Optional features

These features are included by default, but can be removed from the project if not needed:

- [@headlessui/react](https://headlessui.com/react/) for accessible UI components
- [@heroicons/react](https://heroicons.com/react/) for icons

## Development

### `.env` file

This template includes a `.env.sample` file that can be used to set environment variables. Duplicate and rename to `.env`. This file should be placed in the root of the project. The following environment variables are available:

- `APP_ENV` - The environment to run the application in. This can be either `development` or `production`. Defaults to `development`.

This template includes a Dockerfile and a docker-compose file that can be used to build and run the application in a container. To build the image, run:

```sh
docker compose up
```

If you want to run the application without Docker, you can run:

```sh
bun run dev
```

This will start the development server at `http://localhost:3000`. If running without Docker, you will need to have [Bun](https://bun.sh/) installed on your machine.

## Production

There are two ways to build the application for production.

To build the application for production, run:

```sh
bun run build
```

After running `bun run build`, you can serve the application using:

```sh
bun run preview-build
```

Alternatively, you can build the application for production using Docker:

```sh
docker compose -f docker-compose.prod.yml up
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.