import React, {Suspense} from 'react'
import {Provider} from 'react-redux'

import {BrowserRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import routes from './router'
import store from './store'

import Footer from './components/footer'
import Header from './components/header'

const App = () => {
  const onClickNav = (type: string) => {}

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main className="main-wrapper">
          <Suspense fallback={<div>hello</div>}>
            {renderRoutes(routes)}
          </Suspense>
        </main>
        <Footer type="jizhang" onClickNav={onClickNav} />
      </BrowserRouter>
    </Provider>
  )
}

export default App
