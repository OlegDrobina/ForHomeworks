import { useState } from 'react'
import SWAPIHeader from './components/SWAPIHeader'
import SWAPIReqUrl from './components/SWAPIReqUrl'
import SWAPICardBody from './components/SWAPICardBody'

const App = () => {
  return (
    <div className="container">
      <SWAPIHeader />
      <SWAPIReqUrl />
      <SWAPICardBody />
    </div>
  )
}

export default App;
