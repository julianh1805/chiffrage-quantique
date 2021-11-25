const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      $ENV: {
        apiUrl: JSON.stringify(process.env.apiUrl),
        apiPort: JSON.stringify(process.env.apiPort),
      }
    })
  ]
};
