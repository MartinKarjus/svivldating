module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [
                    // path.join(__dirname, 'your-own-js-files'),
                    // path.join(__dirname, 'node_modules/some-other-lib-that-needs-babel'),
                    path.join(__dirname, 'node_modules/react-native-storage')
                ],
                exclude: /node_modules/,
                loader: 'babel-loader',
                // loader: 'babel',
                    // react-native-web-storage had this as loader, kept old one
                query: {
                    //presets: ['env', 'stage-0', 'react']
                        // this was here alone before, react-native-web-storage wanted the 3 new lines o.O no idea wtf it dhoes
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-1', 'react'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    },
    resolve: {
        alias: {
            "react-native$": "react-native-web"
        },
        extensions: [ '.web.js', '.js' ]
    }
};