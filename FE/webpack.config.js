const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@/api" : path.resolve(__dirname, './src/api'),
      "@/assets" : path.resolve(__dirname, './src/assets'),
      "@/components" : path.resolve(__dirname, './src/components'),
      "@/constants" : path.resolve(__dirname, './src/constants'),
      "@/hooks" : path.resolve(__dirname, './src/hooks'),
      "@/pages" : path.resolve(__dirname, './src/pages'),
      "@/styles" : path.resolve(__dirname, './src/styles')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        exclude: ["/node_modules"],
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.module\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },  
      {
        test: /\.(png|svg)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './public'),
          globOptions: {
            ignore: ["**/index.html"],
          },
          noErrorOnMissing: true
        },
      ],
    }),
  ],
  devServer: {
    historyApiFallback: true,
    port: 8080,
    hot: true,
  },
};