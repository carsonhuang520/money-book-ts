import React from 'react'

import {INewCategory} from '@/libs/models'
import Icon from '@/components/Icon'

import {CategoryWrapper} from '@/components/category/style'

interface IProps {
  type: string
  current: INewCategory
  categories: INewCategory[]
  onClickItem: (item: INewCategory) => void
}

const IconList = ({categories, current, onClickItem}: IProps) => {
  return (
    <CategoryWrapper>
      <div className={'category-wrapper'}>
        <ul className={'category-list'}>
          {categories.map((item) => {
            return (
              <li
                key={item.id}
                className={'category-item'}
                onClick={() => onClickItem(item)}
              >
                <div
                  className={`category-item-content newIcon ${
                    item.id === current.id ? 'active' : ''
                  }`}
                >
                  <Icon name={item.name} />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </CategoryWrapper>
  )
}

export default IconList
