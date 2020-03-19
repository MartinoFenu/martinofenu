module.exports = {
  siteMetadata: {
    title: 'Martino Fenu - Web Developer',
    author: 'Martino Fenu',
    owner: 'Martino Fenu',
    description: `I'm Martino and I'm a self-taught web developer. Most of the time I like to work with the MERN stack`,
    siteUrl: `https://martinofenu.it`,
    image: `https://martinofenu.it/logo.png`,
    logo: `https://martinofenu.it/logo.png`,
    social: {
      twitter: '@oni_traM',
      twitterLink: 'https://twitter.com/oni_tram',
      github: 'https://github.com/MartinoFenu',
      telegram: ''
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: []
      }
    },
    {
      resolve: 'gatsby-plugin-svgr-loader',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GOOGLE_ID,
          anonymize: true
        },
        environments: ['production']
      },
    }
  ]
}
