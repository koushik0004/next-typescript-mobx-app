const withSass = require('@zeit/next-sass');

const config = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    devIndicators: {
        autoPrerender: true,
    }
};

module.exports = withSass(config);