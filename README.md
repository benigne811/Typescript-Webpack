# React Dev Week 1 Activity

## TypeScript and Webpack Book Application

This project is a simple book application converted from JavaScript to TypeScript. It demonstrates TypeScript classes, type annotations, interfaces, and Webpack bundling.

## Technologies

* HTML
* TypeScript
* Node.js
* npm
* Webpack
* ts-loader

## Project Structure

```text
react-dev-week1-Activity/
├── src/
│   └── main.ts
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── webpack.config.js
├── .gitignore
└── README.md
```

## Features

* `Book` class with typed properties and constructor.
* Type annotations for variables and functions.
* `Review` interface for book reviews.
* `addReview()` function for storing reviews.
* Webpack configuration for bundling TypeScript.
* TypeScript compilation using `ts-loader`.

## Installation

Install the project dependencies:

```bash
npm install
```

## Build

Build the project using Webpack:

```bash
npm run build
```

This generates:

```text
dist/bundle.js
```

## Run

After building, open `index.html` in a web browser.

The application displays:

* The Hobbit — J.R.R. Tolkien, 1937
* The Lord of the Rings — J.R.R. Tolkien, 1954

## TypeScript Check

To check for TypeScript errors without generating files:

```bash
npx tsc --noEmit
```

## GitHub

The project was developed using incremental Git commits with meaningful commit messages. The `node_modules` directory is excluded using `.gitignore`.

