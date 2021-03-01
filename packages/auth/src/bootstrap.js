import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'

import App from './App'

const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    })

  if (onNavigate) {
    history.listen(onNavigate)
  }

  ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el)

  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      const { pathname } = history.location
      console.log('Auth pathname', pathname)
      if (pathname !== nextPathname) {
        history.push(nextPathname)
      }
    },
  }
}

if (process.env.NODE_ENV === 'development') {
  const elm = document.getElementById('auth-root')
  if (elm) {
    mount(elm, { defaultHistory: createBrowserHistory() })
  }
}

export { mount }
