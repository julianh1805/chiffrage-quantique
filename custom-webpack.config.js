const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      $ENV: {
        apiUrl: JSON.stringify(process.env.API_URL),
        apiPort: JSON.stringify(process.env.API_PORT),
      }
    })
  ]
};
