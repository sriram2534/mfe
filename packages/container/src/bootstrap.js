import React from 'react'
import ReactDOM from 'react-dom'

import MarketingApp from './components/MarketingApp'

const App = () => {
  return (
    <div>
      <h1>This is Container App</h1>
      <div>
        <MarketingApp />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('container-root'))
