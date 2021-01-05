import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import AuthLayout from '../pages/_layouts/_auth'

export default function RouteWrapper({component: Component, isPrivate, ...rest}) {
  const signed = false

  if (!signed && isPrivate) {
    return <Redirect to="/" />
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />
  }

  const Layout = AuthLayout

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
}

RouteWrapper.defaultProps = {
  isPrivate: false,
}