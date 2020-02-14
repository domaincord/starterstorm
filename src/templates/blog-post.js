import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import BaseLayout from '../components/layouts/BaseLayout'
import SEO from '../components/SEO'

const PostTitle = styled.h1`
  font-weight: bold;
  line-height: 1.25;
  color: black;
  font-size: 1.75rem;
`

const PostMeta = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  color: #c2c2c2;
  margin-bottom: 25px;

  span {
    padding: 0 10px;

    &:first-of-type {
      padding-left: 0;
    }

    a {
      color: #88e637;
      text-decoration: none;
    }
  }
`

const PostContent = styled.div`
  width: 100%;
  line-height: 1.75;
  // text-align: justify;
  // text-justify: inter-word;

  a {
    color: #88e637;
    text-decoration: none;
  }

  pre {
    background-color: black;
    color: lime;
  }
`

const BlogPost = ({ data }) => {
  const { title, content, date, author, excerpt } = data.wordpress.post

  return (
    <BaseLayout>
      <SEO title={title} description={excerpt} />
      <PostTitle dangerouslySetInnerHTML={{ __html: title }}></PostTitle>
      <PostMeta className="post-meta">
        <span>
          Posted by <u>{author.name}</u>
        </span>
        {`|`}
        <span>{new Date(date).toLocaleDateString()}</span>
      </PostMeta>
      <PostContent dangerouslySetInnerHTML={{ __html: content }}></PostContent>
    </BaseLayout>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: ID!) {
    wordpress {
      post(id: $slug, idType: SLUG) {
        author {
          avatar {
            url
          }
          name
        }
        categories {
          edges {
            node {
              slug
              name
              id
            }
          }
        }
        tags {
            edges {
                node {
                    slug
                    id
                    name
                }
            }
        }
        date
        content(format: RENDERED)
        excerpt(format: RENDERED)
        title(format: RENDERED)
        slug
      }
    }
  }
`

export default BlogPost
