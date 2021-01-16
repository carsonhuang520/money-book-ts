import React, {Fragment} from 'react'
import {useHistory} from 'react-router-dom'
import {Map} from 'immutable'
import {useSelector, shallowEqual} from 'react-redux'

import {getCategories, getNewCategory, setCategories} from '@/libs/localStorage'
import {ICategory} from '@/libs/models'
import {success} from '@/libs/utils'

import CategoryForm from './c-cpns/category-form'

const CreateCategory = () => {
  const newCategories = getNewCategory()
  const history = useHistory()

  const {type} = useSelector((state: Map<string, string>) => {
    return {
      type: state.getIn(['account', 'type']),
    }
  }, shallowEqual)

  const onCreateCategory = (item: ICategory): void => {
    const categories = getCategories()
    categories.push(item)
    setCategories(categories)
    success('添加成功!')
    history.push('/edit')
  }

  return (
    <Fragment>
      <CategoryForm
        categories={newCategories}
        type={type}
        onCreateCategory={onCreateCategory}
      />
    </Fragment>
  )
}

export default CreateCategory
