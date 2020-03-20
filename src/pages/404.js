import React from "react"
import Link from '../components/Link';
import SEO from "../components/Seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div className="content-wrapper">
      <h1>NOT FOUND</h1>
      <p>Sorry, <em>this is not the page that you are looking for</em>, please <Link to='/'>go back to home page</Link>.</p>
    </div>
  </>
)

export default NotFoundPage
