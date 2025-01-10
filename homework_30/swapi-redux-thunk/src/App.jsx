import SWAPIHeader from './components/SWAPIHeader/SWAPIHeader'
import SWAPIReqUrl from './components/SWAPIReqUrl/SWAPIReqUrl'
import SWAPICardBody from './components/SWAPICardBody/SWAPICardBody'
import SWAPIFooter from './components/SWAPIFooter/SWAPIFooter'

import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  

  return (
    <Provider store={store}>
      <div className="container">
        <SWAPIHeader />
        <SWAPIReqUrl />
        <SWAPICardBody />
        <SWAPIFooter />
      </div>
    </Provider>
  )
}

export default App
