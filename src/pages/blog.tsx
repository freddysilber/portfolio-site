import React from 'react'
// Components
import { BlogSidebar, Layout, SEO } from '../components'
// Hooks
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { BlogData, BlogPost } from '../models'

const PostList = styled.ol`
	list-style: none;
	width: 70%;
`

const PostListItem = styled.li`
	width: 100%;
	padding: 0.5rem;
	border: 2px solid transparent;
	transition: all 0.5s ease;

	&:not(:last-child) {
		margin-bottom: 0.5rem !important;
	}

	&:hover {
		border: 2px solid #ff812e;
	}
`

const PostLink = styled(Link)`
	display: flex;
`

const PostListItemContent = styled.div`
	padding: .25rem;
`

const PostImageWrapper = styled.div`
	width: 200px;
	border-radius: 5px;

	.gatsby-image-wrapper {
		width: 180px;
		border-radius: 5px;
		img {
			border-radius: 5px;
		}
	}
`

export default function BlogPage({ data }: BlogData) {
	const recentPosts = data.blog.edges.slice(0, 5)
	const otherPosts = data.blog.edges.slice(5, 15)

	return (
		<Layout>
			<SEO title="Blog" />
			<div style={{ display: 'flex', padding: '0 3rem' }}>
				<PostList>
					{recentPosts.map((post: BlogPost, index: number) => {
						const { frontmatter, excerpt } = post.node
						const { slug, title, coverImage, date } = frontmatter

						return (
							<PostListItem key={index} className="has-background-grey-dark box">
								<PostLink to={slug}>
									<PostImageWrapper>
										<Img fluid={{ ...coverImage.childImageSharp.fluid }} />
									</PostImageWrapper>
									<PostListItemContent>
										<h1 className="has-text-warning has-text-weight-semibold is-size-5">{title}</h1>
										<p className="has-text-grey-light mb-2">Published on {date}</p>
										<p className="has-text-light">{excerpt}</p>
									</PostListItemContent>
								</PostLink>
							</PostListItem>
						)
					})}
				</PostList>
				<BlogSidebar data={data} otherPosts={otherPosts} />
			</div>
		</Layout >
	)
}

export const query = graphql`
	query {
		blog: allMarkdownRemark(
	  		sort: { order: DESC, fields: [frontmatter___date] }
	  		limit: 15
	  		filter: { fileAbsolutePath: { regex: "/blog/" } }
		) {
	  		edges {
				node {
		  			excerpt
		  			frontmatter {
						title
						date
						slug
						coverImage {
			  				childImageSharp {
								fluid(
				  					maxWidth: 400
				  					maxHeight: 400
				  					fit: COVER
				  					cropFocus: CENTER
								) {
				  					...GatsbyImageSharpFluid
								}
			  				}
						}
		  			}
				}
	  		}
		}
  	}
`