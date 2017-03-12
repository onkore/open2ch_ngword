import path from 'path'

module.exports = {
  entry: {
    background: path.join(__dirname, 'src/js/background.js'),
    content_script: path.join(__dirname, 'src/js/content_script.js'),
    options: path.join(__dirname, 'src/js/options.js')
  },

  output: {
    path: path.join(__dirname, './build/'),
    filename: '[name].bundle.js',
  },

  devtool: '#source-map',

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}
