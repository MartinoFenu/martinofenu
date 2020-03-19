const scrollToElement = require('scroll-to-element')
const React = require("react")
const Layout = require("./src/components/Layout").default

exports.onRouteUpdate = ({ location }) => {
  checkHash(location)
}

const checkHash = location => {
  if (location && location.hash) {
    scrollToElement(location.hash, {
      offset: -75,
      duration: 1000,
    })
  }
}

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
