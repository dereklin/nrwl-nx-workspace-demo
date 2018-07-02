const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const ConcatPlugin = require('webpack-concat-plugin');
const libsPath = path.resolve('libs');
const appsPath = path.resolve('apps');
const {
  ScriptsWebpackPlugin,
  NamedLazyChunksWebpackPlugin,
  BaseHrefWebpackPlugin
} = require('@angular-devkit/build-angular/src/angular-cli-files/plugins/webpack');

module.exports = {
  resolve: {
    alias: {
      styles: path.resolve(__dirname, '../apps/app1/src/styles')
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loaders: ['file-loader'],
        include: path.resolve(__dirname, '../')
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'node_modules/owl.carousel/dist/assets/owl.carousel.css', to: 'assets/css/owl.carousel.css' },
      { from: 'node_modules/owl.carousel/dist/assets/owl.theme.default.css', to: 'assets/css/owl.theme.default.css' },
      { from: 'node_modules/owl.carousel/dist/assets/owl.theme.green.css', to: 'assets/css/owl.theme.green.css' },
      { from: 'node_modules/bootstrap/dist/css/bootstrap.css', to: 'assets/css/bootstrap.css' },
      { from: 'node_modules/font-awesome/css', to: 'assets/font-awesome/css' },
      { from: 'node_modules/font-awesome/fonts', to: 'assets/font-awesome/fonts' },
      { from: 'node_modules/semantic-ui-css/semantic.css', to: 'assets/semantic-ui-css/semantic.css' },
      { from: 'node_modules/semantic-ui-css/themes', to: 'assets/semantic-ui-css/themes' }
    ]),
    new webpack.NormalModuleReplacementPlugin(/@nrwl-nx-workspace-demo/, function(resource) {
      resource.request = resource.request.replace(/@nrwl-nx-workspace-demo(.*)/, `${libsPath}/$1/src/index.ts`);
    }),
    new ScriptsWebpackPlugin({
      name: 'scripts',
      sourceMap: true,
      filename: 'scripts.bundle.js',
      scripts: [
        'node_modules/jquery/dist/jquery.js',
        'node_modules/owl.carousel/dist/owl.carousel.js',
        'node_modules/semantic-ui-css/semantic.js'
      ],
      basePath: '.'
    })
  ]
};
