import React, {Fragment} from 'react'
import {Map} from 'immutable'
import {useSelector, shallowEqual} from 'react-redux'

import {newCategories} from '@/libs/localStorage'

import CategoryForm from './c-cpns/category-form'

const CreateCategory = () => {
  const {type} = useSelector((state: Map<string, string>) => {
    return {
      type: state.getIn(['account', 'type']),
    }
  }, shallowEqual)

  return (
    <Fragment>
      <CategoryForm categories={newCategories} type={type} />
    </Fragment>
  )
}

export default CreateCategory
