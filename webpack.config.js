const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

/*We are basically telling webpack to take index.js from entry. Then check for all file extensions in resolve. 
After that apply all the rules in module.rules and produce the output and place it in main.js in the public folder.*/

module.exports = {
  /** "mode"
   * the environment - development, production, none. tells webpack
   * to use its built-in optimizations accordingly. default is production
   */
  mode: 'development',
  /** "entry"
   * the entry point
   */
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    /** "path"
     * the folder path of the output file
     */
    path: path.resolve(__dirname, 'build'),
    /** "filename"
     * the name of the output file
     */
    filename: 'main.js',
  },
  /** "target"
   * setting "node" as target app (server side), and setting it as "web" is
   * for browser (client side). Default is "web"
   */
  target: 'web',
  devServer: {
    /** "port"
     * port of dev server
     */
    port: '9500',
    /** "static"
     * This property tells Webpack what static file it should serve
     */
    static: {
      directory: path.join(__dirname, 'public'),
    },
    /** "open"
     * opens the browser after server is successfully started
     */
    open: true,
    /** "hot"
     * enabling and disabling HMR. takes "true", "false" and "only".
     * "only" is used if enable Hot Module Replacement without page
     * refresh as a fallback in case of build failures
     */
    hot: true,
    /** "liveReload"
     * disable live reload on the browser. "hot" must be set to false for this to work
     */
    liveReload: true,
  },
  resolve: {
    /** "extensions"
     * If multiple files share the same name but have different extensions, webpack will
     * resolve the one with the extension listed first in the array and skip the rest.
     * This is what enables users to leave off the extension when importing
     */
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    /** "alias"
     * defines shortcuts or aliases for module paths.
     */
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@graphql': path.resolve(__dirname, 'src/lib/graphql'),
    },
  },
  module: {
    /** "rules"
     * This says - "Hey webpack compiler, when you come across a path that resolves to a '.js or .jsx'
     * file inside of a require()/import statement, use the babel-loader to transform it before you
     * add it to the bundle. And in this process, kindly make sure to exclude node_modules folder from
     * being searched"
     */
    rules: [
      {
        test: /\.(js|ts)x?$/, //kind of file extension this rule should look for and apply in test
        exclude: /node_modules/, //folder to be excluded
        use: 'babel-loader', //loader which we are going to use
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    /** "ESLintPlugin"
     *  ESLint will check the JavaScript and TypeScript files (including React files) for any linting issues during the Webpack build process.
     */
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    /** "HtmlWebpackPlugin"
     * streamlines the process of integrating Webpack's output (the bundled JavaScript files) within the application's HTML entry point,
     */
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ],
}
