import React from "react";
import styled from 'styled-components'
import BaseLayout from "../components/layouts/BaseLayout";
import { graphql, Link } from "gatsby";

const PostBit = styled.article`
  width: 100%;
  height: auto;
  max-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 25px;

  &:after {
    content: '';
    display: block;
    width: 75px;
    height: 1px;
    background-color: #d1d1d1;
    margin: 25px auto;
  }
`

const PostDate = styled.small`
  text-transform: uppercase;
  font-size: 0.85rem;
  font-weight: normal;
  color: #9e9e9e;
`

const PostTitle = styled.h4`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: black;
  margin-top: 0;
  margin-bottom: 5px;
`

const PostContent = styled.p`
  line-height: 1.75rem;
  font-weight: 300;
  margin: 0;
`

const ReadButton = styled(Link)`
  padding: 5px 15px;
  background-color: #ef8100;
  color: white;
  font-weight: bold;
  font-size: 0.95rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 15px;
`

const Homepage = ({ data }) => {
  const posts = data.wordpress.posts.edges.map(edge => edge.node);
  console.log(posts);

  return (
    <BaseLayout isHome>
        {
            posts.map(post => {

                return (
                    <PostBit key={post.id}>
                        <PostDate>{new Date(post.date).toLocaleDateString()}</PostDate>
                        <PostTitle>{post.title}</PostTitle>
                        <PostContent dangerouslySetInnerHTML={{ __html: post.excerpt }}></PostContent>
                        <ReadButton to={`/blog/${post.slug}`}>Read More</ReadButton>
                    </PostBit>
                )
            })
        }
    </BaseLayout>
  );
};

export const query = graphql`
  {
    wordpress {
      posts(where: {status: PUBLISH}) {
        edges {
          node {
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
            id
          }
        }
      }
    }
  }
`;

export default Homepage;
