import React from "react"
import { default as Row, propTypes as rowProps } from "./Row"
import { default as Col, propTypes as colProps } from "./Col"

export default ({children, ...props}) => {
  const childProps = Object.keys(props).reduce((acc, key) => {
    const cur = props[key]
    if (colProps.hasOwnProperty(key)) {
      acc.col[key] = cur
    }
    if (rowProps.hasOwnProperty(key) && key !== "tagName") {
      acc.row[key] = cur
    }
    return acc
  },  {col: {}, row: {}})
  return <Row {...childProps.row}>
    <Col {...childProps.col}>{children}</Col>
  </Row>
}
