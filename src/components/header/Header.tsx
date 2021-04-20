import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
// Material UI
import { Avatar } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
// Utilities
import { makeRainbow, Routes } from '../../util'
// Styles
import './index.scss'
// Images
// const vintage = require('../../assets/images/vintage.png')
// const horseRide = require('../../assets/images/horseRide.png')
// const wreath = require('../../assets/images/wreath.png')

// const AVATARS: string[] = [wreath]

const useStyles = makeStyles(() =>
	createStyles({
		background: {
			background: '#666'
		},
		avatar: {
			width: '33%',
			height: '15rem'
		},
		imagesContainer: {
			display: 'flex',
			justifyContent: 'center',
			flexWrap: 'wrap'
		}
	})
)

// const horseRide = graphql`
// 	query {
// 		file (relativePath: { eq: "horseRide.png" }) {
// 			childImageSharp {
// 				fixed (height: 500) {
// 					...GatsbyImageSharpFixed
// 				}
// 			}
// 		}
// 	}
// `

// const vintage = graphql`
// 	query {
// 		file (relativePath: { eq: "vintage.png" }) {
// 			childImageSharp {
// 				fixed (height: 500) {
// 					...GatsbyImageSharpFixed
// 				}
// 			}
// 		}
// 	}
// `

// const wreath = graphql`
// 	query {
// 		file (relativePath: { eq: "wreath.png" }) {
// 			childImageSharp {
// 				fixed (height: 500) {
// 					...GatsbyImageSharpFixed
// 				}
// 			}
// 		}
// 	}
// `

// function HorseRide(): JSX.Element {
// 	const data = useStaticQuery(horseRide)
// 	return <Img fixed={data.file.childImageSharp.fixed} alt="Horse Ride" />
// }

// function Vintage(): JSX.Element {
// 	const data = useStaticQuery(vintage)
// 	return <Img fixed={data.file.childImageSharp.fixed} alt="Vintage" />
// }

// function Wreath(): JSX.Element {
// 	const data = useStaticQuery(wreath)
// 	return <Img fixed={data.file.childImageSharp.fixed} alt="Wreath" />
// }

export default function Header({ siteTitle }: any) {
	const classes: Record<string, string> = useStyles()
	// when this function is called, it will promote the title to have a rainbow pulse effect
	useEffect(() => {
		makeRainbow(); // Make the header title have the rainbow animation
	})
		
	return (
		<>
			<header>
				<h1 style={{ padding: '1rem', letterSpacing: '3px' }}>
					<Link to={Routes.home} className='header'>
						{siteTitle}
					</Link>
				</h1>
			</header>
			<div className={classes.imagesContainer}>
				{/* <HorseRide /> */}
				{/* <Vintage /> */}
				{/* <Wreath /> */}
				{/* {AVATARS.map((image: string) => <Avatar key={image} src={image} className={classes.avatar} variant="rounded" />)} */}
			</div>
		</>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}