import React from 'react'
import Link from 'gatsby-link';
import PostListing from '../components/Posts/PostListing';


const IndexPage = ({ data }) => (
  <div>
    <h2>Writing</h2>
    <h5>My thoughts, my design process, and career.</h5>
    {data.allMarkdownRemark.edges.map(({node}) => (
     <PostListing key={node.id} post={node} />
   ))}
  </div>
);

export default IndexPage

export const query = graphql `
  query SiteMeta {
    site {
    siteMetadata {
      title
      desc
    }
  }
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD YYYY")
        }
        html
        excerpt(pruneLength: 280)
        fields {
          slug
        }
      }
    }
  }
}
`;
