# Flow starter app with React ⚛️

Minimal repo to kickstart a Javascript app with Flow pre-configured.

## Getting Started

---

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
