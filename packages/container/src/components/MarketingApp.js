import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { mount } from 'marketing/MarketingApp'

const MarketingApp = () => {
  const ref = useRef(null)
  const history = useHistory()

  const onNavigate = ({ pathname: nextPathname }) => {
    const { pathname } = history.location

    if (pathname !== nextPathname) {
      history.push(nextPathname)
    }
  }

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate,
      initialPath: history.location.pathname,
    })

    history.listen(onParentNavigate)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div className={'marketing-app'} ref={ref}></div>
}

export default MarketingApp
