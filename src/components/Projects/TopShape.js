import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Media from "images/top_shape.png"

import BaseProject from "./BaseProject"

export default () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "top_shape.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  const { fluid } = placeholderImage.childImageSharp

  return (
    <BaseProject image={{ src: Media, fluid }} prefix="projects.topShape" />
  )
}