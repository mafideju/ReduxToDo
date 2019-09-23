# Workflow ReactJS

## What's inside it?

* Webpack 3+
* Babel
* React hot loader
* HTML and CSS generated automatically by webpack
* Jest for tests and Chai for assertions
* Storybook to create isolatelly components' stories
* Async/await
* Dynamic `import()` function
* Webpack tree shaking!
* [Preact](https://preactjs.com/) for production build (optional)

## Scripts

- `yarn dev (or npm run dev)`: Starts the application on development mode
- `yarn test (or npm test)`: Run tests once
- `yarn test:watch (or npm run test:watch)`: Run tests in watch mode
- `yarn build (or npm run build)`: Build project to production
- `yarn build:analyzer (or npm run build:analyzer)`: Build project to production and open bundle analyzer on `8888` port
- `yarn storybook (or npm run storybook)`: Run Storybook on `6006` port
- `yarn storybook:build`: Build Storybook to static files
- `yarn update-packages`: Update all packages to the latest version
- `yarn start (or npm start)`: Special script reserved to run production code. Change as you wish. For now, it is the same as `yarn dev`.

## License Boilerplate

[MIT](https://github.com/fdaciuk/licenses/blob/master/MIT-LICENSE.md) &copy; Fernando Daciuk
