import React, {Suspense} from 'react'

import {BrowserRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import routes from './router'

import Footer from './components/footer'
import Header from './components/header'

const App = () => {
  const onClickType = (type: string) => {}

  const onClickNav = (type: string) => {}

  return (
    <BrowserRouter>
      <Header type="outcome" onClickType={onClickType} />
      <main className="main-wrapper">
        <Suspense fallback={<div>hello</div>}>{renderRoutes(routes)}</Suspense>
      </main>
      <Footer type="jizhang" onClickNav={onClickNav} />
    </BrowserRouter>
  )
}

export default App
