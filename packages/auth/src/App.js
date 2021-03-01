import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import styles from './App.module.scss'
import SignIn from './components/Signin'
import SignUp from './components/Signup'

const generateClassName = createGenerateClassName({ productionPrefix: 'ma' })

export default ({ history, onSignIn }) => {
  console.log('history', history)
  return (
    <div className={styles.authMain}>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path={'/auth/signin'}>
              <SignIn onSignIn={onSignIn} />
            </Route>
            <Route path={'/auth/signup'}>
              <SignUp onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
}
