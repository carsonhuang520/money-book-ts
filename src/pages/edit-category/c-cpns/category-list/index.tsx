import React from 'react'
import {useHistory} from 'react-router-dom'

import {ICategory} from '@/libs/models'
import {confirm} from '@/libs/utils'

import Icon from '@/components/Icon'
import {CategoryListWrapper} from './style'

interface IProps {
  type: string
  categories: ICategory[]
  onDeleteCategory: (item: ICategory) => void
}

const CategoryList = ({type, categories, onDeleteCategory}: IProps) => {
  const history = useHistory()

  const isEmpty = categories.length === 0

  const toAddCategory = (): void => {
    history.push('/category')
  }

  return (
    <CategoryListWrapper className={'categoryList-wrapper'}>
      <ul className={'categoryList'}>
        <li onClick={toAddCategory}>
          <span>追加新的标签</span>
          <Icon name={'you'} />
        </li>
        {!isEmpty
          ? categories.map((item, index) => {
              return (
                <li key={item.id}>
                  <span className={'categoryList-item'}>
                    <Icon name={item.iconName} />
                    <span>{item.name}</span>
                  </span>
                  <span
                    onClick={() =>
                      confirm('确定要删除该标签吗？', () =>
                        onDeleteCategory(item)
                      )
                    }
                  >
                    <Icon name={'delete'} />
                  </span>
                </li>
              )
            })
          : '暂无标签'}
      </ul>
    </CategoryListWrapper>
  )
}

export default CategoryList
