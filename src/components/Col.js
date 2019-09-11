import React from "react"
import PropTypes from "prop-types"
import { getClass, createProps } from "../util"
import { isInteger } from "../util"
import { ColumnSizeType, ViewportSizeType } from "../types"

export const propTypes = {
  xs: PropTypes.oneOfType([ColumnSizeType, PropTypes.bool]),
  sm: PropTypes.oneOfType([ColumnSizeType, PropTypes.bool]),
  md: PropTypes.oneOfType([ColumnSizeType, PropTypes.bool]),
  lg: PropTypes.oneOfType([ColumnSizeType, PropTypes.bool]),
  xl: PropTypes.oneOfType([ColumnSizeType, PropTypes.bool]),
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  xlOffset: PropTypes.number,
  first: ViewportSizeType,
  last: ViewportSizeType,
  initialOrder: ViewportSizeType,
  hidden: ViewportSizeType,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
}

const classMap = {
  xs: "col-xs",
  sm: "col-sm",
  md: "col-md",
  lg: "col-lg",
  xl: "col-xl",
  xsOffset: "col-xs-offset",
  smOffset: "col-sm-offset",
  mdOffset: "col-md-offset",
  lgOffset: "col-lg-offset",
  xlOffset: "col-xl-offset"
}

function getColClassNames(props) {
  const extraClasses = []

  if (props.className) {
    extraClasses.push(props.className)
  }

  if (props.first) {
    extraClasses.push(getClass("first-" + props.first))
  }

  if (props.last) {
    extraClasses.push(getClass("last-" + props.last))
  }

  if (props.initialOrder) {
    extraClasses.push(getClass("initial-order-" + props.initialOrder))
  }
  
  if (props.hidden) {
    extraClasses.push(getClass("hidden-" + props.hidden))
  }

  return Object.keys(props)
    .filter(key => classMap[key])
    .map(key => getClass(isInteger(props[key]) ? (classMap[key] + "-" + props[key]) : classMap[key]))
    .concat(extraClasses)
}

export function getColumnProps(props) {
  return createProps(propTypes, props, getColClassNames(props))
}

export default function Col(props) {
  const { tagName, ...columnProps } = props
  return React.createElement(tagName || "div", getColumnProps(columnProps))
}



Col.propTypes = propTypes
