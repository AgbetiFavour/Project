import React from "react"
import { Switch, Route } from "react-router-dom"
import Login from "../pages/login"
import { PUBLIC_PATHS } from "./constants"

export default function UnAuthenticatedApp() {
  const { LOGIN } = PUBLIC_PATHS
  return (
    <>
      <Switch>
        <Route path={LOGIN} exact component={Login} />
      </Switch>
      <Route component={Login} />
    </>
  )
}
