import React from "react"
import PropTypes from "prop-types"
import { getClass, createProps } from "../util"
import { ViewportSizeType } from "../types"

const propTypes = {
  atSize: ViewportSizeType
}

function getHideClassNames(props) {
  const extraClasses = []

  if (props.className) {
    extraClasses.push(props.className)
  }

  if (props.atSize) {
    extraClasses.push(getClass("hidden-" + props.hidden))
  } else {
    throw new Error("PropType: atSize is mandatory for this class")
  }

  return extraClasses
}

export function getHideProps(props) {
  return createProps(propTypes, props, getHideClassNames(props))
}

export default function Hide(props) {
  const { tagName, ...columnProps } = props
  return React.createElement(tagName || "div", getHideProps(columnProps))
}

Hide.propTypes = propTypes
