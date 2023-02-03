const remarkGfm = require(`remark-gfm`)
const remarkFootnotes = require(`remark-footnotes`)


//Need to add these plugins somehow
// const rehypeSlug = require(`rehype-slug`)
// const rehypeAutolinkHeadings = require(`rehype-autolink-headings`)

// import rehypeSlug from 'rehype-slug'
// import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const { rehypeMetaAsAttributes } = require(`@lekoarts/rehype-meta-as-attributes`)
const withDefaults = require(`./utils/default-options`)

module.exports = (themeOptions) => {
  const options = withDefaults(themeOptions)

  return {
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: options.postsPath,
          path: options.postsPath,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: options.pagesPath,
          path: options.pagesPath,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `theme-overrides`,
          path: `./src/@lekoarts`,
        },
      },
      options.mdx && {
        resolve: `gatsby-plugin-mdx`,
        options: {
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkFootnotes],
            rehypePlugins: [rehypeMetaAsAttributes] 
            // rehypeSlug, rehypeAutolinkHeadings]
      // // To pass options, use a 2-element array with the
      // // configuration in an object in the second element
      // rehypeAutolinkHeadings]
          },
          extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 960,
                quality: 90,
                linkImagesToOriginal: false,
                backgroundColor: `transparent`,
              },
            },
          ],
        },
      },
      `gatsby-transformer-sharp`,
      options.sharp && {
        resolve: `gatsby-plugin-sharp`,
        options: {},
      },
    ].filter(Boolean),
  }
}
