const path = require('path');
const HtmlWebpackPlugin  = require("html-webpack-plugin");
module.exports = {
  entry: './src/index.js',
  plugins:[new HtmlWebpackPlugin({
  	 template:"./src/index.html"
    }),
   new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'privacy.html',
      template: './src/privacy.html'
    }),
   new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'target.html',
      template: './src/target.html'
    }),
   new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'bloodNeeds.html',
      template: './src/bloodNeeds.html'
    }),
     new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'howDonate.html',
      template: './src/howDonate.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'signup.html',
      template: './src/signup.html'
    })

  ],
  
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader','postcss-loader'],
      },  
      {
        test: /\.html$/i,
        use: 'html-loader'
      },
      {
        test: /\.(svg|png|jpg|jpeg)$/i,
        use:[{
          loader:"file-loader",
          options:{
             name:"[name].[hash].[ext]",
             outputPath:"imags",
              esModule: false
          }

        }
        ],
      },
    ],
  },
  };