import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const ProductRoll = ({ data }) => {
  // Internationalization
  const intl = useIntl();
  // const locale = intl.locale !== 'vi' ? `/${intl.locale}` : '';
  const { edges: posts } = data.allMarkdownRemark;

  // Filtering posts by locale
  const filteredPosts = posts.filter((edge) => edge.node.frontmatter.lang.includes(intl.locale));

  return (
    <div className='columns is-multiline'>
      {filteredPosts &&
        filteredPosts.map(({ node: post }) => (
          <div className='is-parent column is-6' key={post.id}>
            <article
              className={`blog-list-item tile is-child box notification ${
                post.frontmatter.featuredpost ? 'is-featured' : ''
              }`}
            >
              <header>
                {post.frontmatter.featuredimage ? (
                  <div className='featured-thumbnail'>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  </div>
                ) : null}
                <p className='post-meta'>
                  <Link className='title has-text-primary is-size-4' to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <span className='subtitle is-size-5 is-block'>{post.frontmatter.date}</span>
                </p>
              </header>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Link className='button' to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </p>
            </article>
          </div>
        ))}
    </div>
  );
};

ProductRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query ProductRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "product-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                lang
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ProductRoll data={data} count={count} />}
  />
);