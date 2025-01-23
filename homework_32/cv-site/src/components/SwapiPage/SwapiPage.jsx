import SwapiHeader from '../SwapiHeader/SwapiHeader'
import SwapiCardBody from '../SwapiCardBody/SwapiCardBody'
import SwapiFooter from '../SwapiFooter/SwapiFooter'
import SwapiReqUrl from '../SwapiReqUrl/SwapiReqUrl'


import { Provider } from 'react-redux'
import { store } from '../../redux/store'

const SwapiPage = () => {

  return (
    <Provider store={store}>
      <div className="container">
        <SwapiHeader />
        <SwapiReqUrl />
        <SwapiCardBody />
        <SwapiFooter />
      </div>
    </Provider>
  )
}

export default SwapiPage
