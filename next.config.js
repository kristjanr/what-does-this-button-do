const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
        components: {
            youtube: './components/YouTube',
        },
    },
})

module.exports = withNextra(withMDX())