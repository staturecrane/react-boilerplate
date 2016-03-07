module.exports = {
  entry: "./client/app.jsx",
  output: {
    filename: "./public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader', // 'babel-loader' is also a legal name to reference 
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};