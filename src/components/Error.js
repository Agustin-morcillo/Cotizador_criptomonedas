import React from "react"
import PropTypes from "prop-types"

import { Message } from "./theme/Error-theme"

export default function Error({ message }) {
  return <Message>{message}</Message>
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
}
