import React from 'react'
import {Switch} from 'react-router-dom'
import SignIn from '../pages/SignIn'
import Route from './Route'
import Dashboard from '../pages/Dashboard'

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" exact component={Dashboard} isPrivate />
    </Switch>
  )
}

export default Routes
