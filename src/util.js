import styles from "flexboxgrid2"
import cx from "classnames"

export function getClass(className) {
  return (styles && styles[className]) ? styles[className] : className
}

export function createProps(propTypes, props, classNames) {
  const newProps = {};

  Object.keys(props)
    .filter(key => (key === "children" || !propTypes[key]))
    .forEach(key => (newProps[key] = props[key]))

  const className = cx(classNames)
  return Object.assign({}, newProps, { className })
}

export function isInteger(value) {
  return typeof value === "number" && isFinite(value) && Math.floor(value) === value
}
