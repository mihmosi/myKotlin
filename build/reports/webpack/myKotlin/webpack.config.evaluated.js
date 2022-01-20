{
  mode: 'production',
  resolve: {
    modules: [
      '/home/mike/IdeaProjects/kotlinlearn/build/js/packages/myKotlin/kotlin-dce',
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 5000,
      dependenciesCount: 10000,
      showEntries: true,
      showModules: true,
      showDependencies: true,
      showActiveModules: false,
      percentBy: undefined
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      '/home/mike/IdeaProjects/kotlinlearn/build/js/packages/myKotlin/kotlin-dce/myKotlin.js'
    ]
  },
  output: {
    path: '/home/mike/IdeaProjects/kotlinlearn/build/distributions',
    filename: [Function: filename],
    library: 'myKotlin',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  stats: {
    warnings: false,
    errors: false
  }
}