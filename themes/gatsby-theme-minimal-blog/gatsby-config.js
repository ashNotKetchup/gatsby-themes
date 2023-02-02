module.exports = (options) => ({
  siteMetadata: {
    siteTitle: `Minimal Blog`,
    siteTitleAlt: `Minimal Blog - @lekoarts/gatsby-theme-minimal-blog`,
    siteHeadline: `Minimal Blog - Gatsby Theme from @lekoarts`,
    siteUrl: `https://minimal-blog.lekoarts.de`,
    siteDescription: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting.`,
    siteImage: `/banner.jpg`,
    author: `@lekoarts_de`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
      options,
    },
  //   {
  //     resolve: `gatsby-source-filesystem`,
  //     options: {
  //       name: `texts`,
  //       path: `${__dirname}/src/texts`,
  //     },
  //   },
  //   {
  //   /* Include plugin */
  //   resolve: "gatsby-omni-font-loader",

  //   /* Plugin options */
  //   options: {

  //     /* Font loading mode */
  //     mode: "async",

  //     /* Enable font loading listener to handle FOUT */
  //     enableListener: true,

  //     // /* Preconnect URL-s. This example is for Google Fonts */
  //     // preconnect: ["https://fonts.gstatic.com"],

  //     /* Self-hosted fonts config. Add font files and font CSS files to "static" folder */
  //     custom: [
  //       {
  //         /* Exact name of the font as defied in @font-face CSS rule */
  //         name: ["slussen-bold"],
  //         /* Path to the font CSS file inside the "static" folder with @font-face definition */
  //         file: "/fonts/slussen/css/all.min.css",
  //       },
  //     ],
  //   },
  // },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-theme-ui`,
  ],
})
