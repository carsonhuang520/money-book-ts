import React, {Suspense, useCallback} from 'react'
import {Provider} from 'react-redux'
import {useLocation} from 'react-router-dom'

import {renderRoutes} from 'react-router-config'
import routes from './router'
import store from './store'

import Footer from './components/footer'
import Header from './components/header'

const App = () => {
  const onClickNav = useCallback((type: string) => {}, [])
  const location = useLocation()

  const {pathname} = location

  return (
    <Provider store={store}>
      <Header pathname={pathname} />
      <main className="main-wrapper">
        <Suspense fallback={<div>hello</div>}>{renderRoutes(routes)}</Suspense>
      </main>
      <Footer type="jizhang" onClickNav={onClickNav} />
    </Provider>
  )
}

export default App
