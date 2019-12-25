/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import {
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
  LinkedinIcon,
  TwitterIcon,
  RedditIcon
} from 'react-share';

import Header from "./header"
import "./layout.css"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`

const GatsbyLink = styled.a`
  margin-left: 5px;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
`

const Share = ({ children }) => (
  <StaticQuery
    query={graphql`
      query TitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Content>
          <RedditShareButton url='google.com'>
            <RedditIcon size={48} round={true}/>
          </RedditShareButton>
        </Content>
      </>
    )}
  />
)

Share.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Share
