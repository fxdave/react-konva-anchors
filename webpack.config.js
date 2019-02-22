/**
 * Base webpack config used across other specific configs
 */

module.exports = {
    entry: "./index.js",
    mode: "production",
    output: {
        filename: 'main.js',
        library: 'ReacKonvaAnchors',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    externals: [
        'react',
    ],

    /**
     * Determine the array of extensions that should be used to resolve modules.
     */
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
};
