const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          { 
            test: /\.css$/i,
            use: ["style-loader", 'css-loader']
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            generator: {
              filename: 'imgs/[name][ext]',
 
            }
            // test: /\.(png|svg|jpg|jpeg|gif)$/i,
            // type: 'file-loader',
            // options: {
            //   name: '[name].[ext]',
            //   publicPath : '../imgs',
            //   outputPath : '/imgs'
            // }

          },
        ]
    },
}