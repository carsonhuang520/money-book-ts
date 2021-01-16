import React, {Suspense, useEffect} from 'react'
import {Provider} from 'react-redux'
import {useLocation} from 'react-router-dom'

import {renderRoutes} from 'react-router-config'
import routes from './router'
import store from './store'
import {setItems, setCategories, setNewCategory} from '@/libs/localStorage'

import Footer from './components/footer'
import Header from './components/header'
import Loading from './components/loading'

const App = () => {
  const location = useLocation()

  const {pathname} = location

  useEffect(() => {
    setItems()
    setCategories()
    setNewCategory()
  }, [])

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
