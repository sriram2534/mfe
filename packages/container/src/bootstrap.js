import React from 'react'
import ReactDOM from 'react-dom'

import MarketingApp from './components/MarketingApp'

const App = () => {
  return (
    <div>
      <h1>Container</h1>
      <div>
        <MarketingApp />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('container-root'))
