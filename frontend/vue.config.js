const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {

  transpileDependencies: [
    'vuetify',
  ],

  configureWebpack: {
    plugins: process.env.NODE_ENV === 'production' ? [
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: ['/'],
      }),
    ] : [],
  },
};
