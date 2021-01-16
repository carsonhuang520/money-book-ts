import React, {Fragment, useState, useEffect, useCallback} from 'react'
import {useSelector, shallowEqual} from 'react-redux'
import {Map} from 'immutable'

import {categories} from '@/libs/localStorage'

import {ICategory} from '@/libs/models'
import {success} from '@/libs/utils'

import CategoryList from './c-cpns/category-list'

const EditCategory = () => {
  const [categoriesFilter, setCategoriesFilter] = useState<ICategory[]>([])

  const {type} = useSelector((state: Map<string, string>) => {
    return {
      type: state.getIn(['account', 'type']),
    }
  }, shallowEqual)

  useEffect(() => {
    const newCategories = categories.filter(
      (item: ICategory) => item.type === type && item.name !== '编辑'
    )
    setCategoriesFilter(newCategories)
  }, [type])

  const onDeleteCategory = useCallback(
    (item: ICategory) => {
      const newCategories = categoriesFilter.filter(
        (e: ICategory) => e.id !== item.id
      )
      success('删除成功!')
      setCategoriesFilter(newCategories)
    },
    [categoriesFilter]
  )

  return (
    <Fragment>
      <CategoryList
        categories={categoriesFilter}
        type={type}
        onDeleteCategory={(item: ICategory) => onDeleteCategory(item)}
      />
    </Fragment>
  )
}

export default EditCategory
