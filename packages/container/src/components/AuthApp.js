import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { mount } from 'auth/AuthApp'

const AuthApp = () => {
  const ref = useRef(null)
  const history = useHistory()

  const onNavigate = ({ pathname: nextPathname }) => {
    const { pathname } = history.location

    if (pathname !== nextPathname) {
      history.push(nextPathname)
    }
  }

  const onSignIn = () => {}

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate,
      initialPath: history.location.pathname,
      onSignIn,
    })

    history.listen(onParentNavigate)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div className={'auth-app'} ref={ref}></div>
}

export default AuthApp
