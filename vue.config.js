// vue.config.js
module.exports = {
  chainWebpack: config => {
    const cssRule = config.module.rule('css');
    cssRule.use('to-string-loader').loader('to-string-loader');
  },
};
