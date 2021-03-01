import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Progress from './components/Progress'
import Header from './components/Header'

const MarketingApp = lazy(() => import('./components/MarketingApp'))
const AuthApp = lazy(() => import('./components/AuthApp'))

const generateClassName = createGenerateClassName({ productionPrefix: 'co' })

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
          <div>
            <Header />
            <Suspense fallback={<Progress />}>
              <Switch>
                <Route path={'/auth'}>
                  <AuthApp />
                </Route>
                <Route path={'/'}>
                  <MarketingApp />
                </Route>
              </Switch>
            </Suspense>
          </div>
        </StylesProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
