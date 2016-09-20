# Ziltag Elements

## Install

```
npm i -S ziltag/elements
```

## Usage

Minimal `webpack.config.js`:

```js
module: {
  loaders: [{
    test: /\.css$/,
    loader: 'style!css'
  },{
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel',
    query: {
      presets: ['es2015', 'react'] // remove es2015 if webpack 2 is used
    }
  }]
}
```

## Dev

```
npm run storybook
```

Remember to build before push:

```
npm run build && git add dist && git ci -m 'build' && git push
```

or

```
npm run release
```
