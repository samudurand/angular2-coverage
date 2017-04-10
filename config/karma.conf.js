var webpackConfig = require('./webpack.test');

module.exports = function (config) {
    var _config = {
        basePath: '..',

        frameworks: ['jasmine', 'karma-typescript'],

        files: [
            {pattern: './config/karma-test-shim.js', watched: false},
            {pattern: "src/**/*.ts"}
        ],

        karmaTypescriptConfig: {
            tsconfig: 'src/tsconfig.json',
            bundlerOptions: {
                transforms: [
                    function(context, callback) {
                        console.log('passed here');
                        if(context.module === "./main.css") {
                            context.source = "module.exports = { color: red };";
                            return callback(undefined, true);
                        }
                        return callback(undefined, false);
                    },
                    require("karma-typescript-es6-transform"),
                    require("karma-typescript-angular2-transform")
                ]
            }
        },

        preprocessors: {
            '**/*.ts': ['karma-typescript']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        reporters: ['spec', 'kjhtml', 'karma-typescript'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_DEBUG,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true
    };

    config.set(_config);
};