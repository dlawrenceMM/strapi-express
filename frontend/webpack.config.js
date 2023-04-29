import TerserPlugin from "terser-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'css-minimizer-webpack-plugin';
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

export default function(env, argv) {
  const isProduction = argv.mode === 'production';

  return {
    entry: ['./app/index.js', './app/styles/index.scss'],
    output: {
      path: path.resolve(__dirname, './public/dist'),
      filename: 'bundle.js',
      clean: true,
    },
    performance: {
      hints: false,
    },
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'source-map',
    optimization: {
      minimizer: [
        new TerserPlugin({
          parallel: true,
          extractComments: true,
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    },
    stats: {
      hash: false,
      version: false,
      timings: false,
      children: false,
      chunks: false,
      modules: false,
      source: false,
      publicPath: false,
    },
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    experiments: {
      topLevelAwait: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
              },
            },
            {
              loader: 'cache-loader',
              options: {
                cacheDirectory: path.resolve(__dirname, 'node_modules/.cache/webpack'),
              },
            }
          ]
        },
        {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
            loader: 'css-loader',
            options: {
                importLoaders: 1,
                sourceMap: true,
            },
            },
            {
            loader: 'postcss-loader',
            options: {
                sourceMap: true,
            },
            },
            {
            loader: 'sass-loader',
            options: {
                sourceMap: true,
            },
            },
        ],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                fallback: 'file-loader',
                outputPath: 'images',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ]
  };
}
