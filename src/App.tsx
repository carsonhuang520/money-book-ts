import React, {Suspense} from 'react'
import {Provider} from 'react-redux'
import {useLocation} from 'react-router-dom'

import {renderRoutes} from 'react-router-config'
import routes from './router'
import store from './store'

import Footer from './components/footer'
import Header from './components/header'
import Loading from './components/loading'

const App = () => {
  const location = useLocation()

  const {pathname} = location

  return (
    <Provider store={store}>
      <Header pathname={pathname} />
      <main className="main-wrapper">
        <Suspense fallback={<Loading />}>{renderRoutes(routes)}</Suspense>
      </main>
      <Footer type="jizhang" />
    </Provider>
  )
}

export default App
