let mix = require('laravel-mix');
const webpack = require('webpack');  // Adicione esta linha

mix.js('resources/js/app.js', 'public/js')
   .vue()
   .css('resources/css/app.css', 'public/css')
   .options({
        sassOptions: {
            outputStyle: 'expanded',
            precision: 8,
        }
   })
   .version();

// Adicionando as flags de feature do Vue no build do Webpack
mix.webpackConfig({
    plugins: [
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: JSON.stringify(true),  // Habilita Options API
            __VUE_PROD_DEVTOOLS__: JSON.stringify(false),  // Desabilita devtools em produção
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(true)  // Defina a flag que está no warning
        })
    ]
});

mix.disableNotifications();
