import React from 'react'
import styled from 'styled-components'

import BaseLayout from './layouts/BaseLayout'
import SEO from './SEO'

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

  a {
    color: #88e637;
    text-decoration: none;
  }

  pre {
    background-color: black;
    color: lime;
  }
`

const BlogPost = ({ post }) => {
  const { title, content, date, author, excerpt } = post

  return (
    <BaseLayout isHome={false}>
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

export default BlogPost
