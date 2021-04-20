/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
// Components
import { Header, Navigation, Skills } from '..'
// Styles
import './index.scss'

const Layout = ({ children }: any) => {
	const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

	return (
		<>
			<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
			<Skills />
			<Navigation />
			<div style={{ margin: `0 auto`, padding: `0 1rem 1.5rem` }}>
				<main>{children}</main>
				<footer>
					<p>Made with ❤️ by yours truly. -Freddy</p>
				</footer>
			</div>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
