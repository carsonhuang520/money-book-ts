import React, {lazy} from 'react'

import {Redirect} from 'react-router-dom'

const CreateAccount = lazy(() => import('../pages/create-account'))
const CreateCategory = lazy(() => import('../pages/create-category'))
const EditCategory = lazy(() => import('../pages/edit-category'))
const Statistical = lazy(() => import('../pages/statistical'))
const AccountList = lazy(() => import('../pages/account-list'))

interface route {
  path: string
  component?: React.LazyExoticComponent<React.ComponentType<any>>
  exact?: boolean
  render?: () => JSX.Element
  routes?: route[]
}

const routes: route[] = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/account" />,
  },
  {
    path: '/account',
    component: CreateAccount,
  },
  {
    path: '/detail',
    component: AccountList,
  },
  {
    path: '/statistical',
    component: Statistical,
  },
  {
    path: '/edit',
    component: EditCategory,
  },
  {
    path: '/category',
    component: CreateCategory,
  },
]

export default routes
