const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /.scss$/,
        loaders: ['style', 'css?modules', 'postcss', 'sass'],
        include: path.resolve(__dirname, '../')
      }
    ]
  },
  postcss: function () {
    return [require('autoprefixer')];
  }
}
