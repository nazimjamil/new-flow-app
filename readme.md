# Flow starter app with React ⚛️


[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Dependencies](https://david-dm.org/nazimjamil/new-flow-app/status.svg)](https://david-dm.org/nazimjamil/new-flow-app/status.svg)
[![Dev Dependencies](https://david-dm.org/nazimjamil/new-flow-app/dev-status.svg)](https://david-dm.org/nazimjamil/new-flow-app/dev-status.svg)
[![airbnb-style](https://img.shields.io/badge/eslint-airbnb-4B32C3.svg)](https://github.com/airbnb/javascript)

> Minimal repo to kickstart a Javascript app with Flow, hot reloading, linting and server-side rendering.

This is a universal react project, providing server-side rendering and Flow syntax.

Feel free to post any issues, questions or suggestions. PRs are more than welcome 👍.

## Getting Started

---

Clone the repo

```
https://github.com/nazimjamil/new-flow-app.git
```


Install dependencies.
```
yarn install
```

Start the dev server
```
yarn start
```

## Orientation

---

HTML template is located at `/template.html`, the main app JS file is `app/index.jsx`.

ESLint has been preconfigured with the [Airbnb styleguide](http://airbnb.io/javascript).

Build artefacts will end up in the `/dist` folder.

## Testing

---

You'll find an example spec under the `___tests___` directory.

Start the watcher.
```
yarn run test:watch
```

Or do a single run
```
yarn run test
```

## Build

---

Run the build command and take a look at `/dist`
```
yarn run build
```

A `postbuild` step runs `react-snap` which will create a static site within the dist folder.
If you would like to verify the static site locally, you can do so by running the following
```
yarn run start:dist
```

## License

---

new-flow-app is open source software [licensed as MIT](https://github.com/nazimjamil/new-flow-app/blob/master/license.md).
