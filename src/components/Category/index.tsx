import classNames from 'classnames'
import {useHistory} from 'react-router-dom'

import {ICategory} from '@/libs/models'

import Loading from '../loading'
import Icon from '../Icon'
import {CategoryWrapper} from './style'

interface IProps {
  currentItem: ICategory
  categories: ICategory[]
  isLoading: boolean
  onClickItem: (item: ICategory) => void
}

const Category = ({
  currentItem,
  categories,
  isLoading,
  onClickItem,
}: IProps) => {
  const history = useHistory()

  const onClickCategory = (item: ICategory) => {
    if (item.name === '编辑') {
      history.push('/edit')
    }
    onClickItem(item)
  }

  return (
    <CategoryWrapper>
      <p className="category-label">{'分类'}</p>
      <div className="category-wrapper">
        {isLoading ? (
          <Loading />
        ) : (
          <ul className="category-list">
            {categories.map((item) => {
              return item.name !== '编辑' ? (
                <li
                  key={item.id}
                  className="category-item"
                  onClick={() => onClickCategory(item)}
                >
                  <div
                    className={classNames('category-item-content', {
                      active: item.id === currentItem.id,
                    })}
                  >
                    <Icon name={item.iconName} />
                    <span className="category-item-content-name">
                      {item.name}
                    </span>
                  </div>
                </li>
              ) : (
                <li
                  key={item.id}
                  className="category-item"
                  onClick={() => onClickCategory(item)}
                >
                  <div
                    className={classNames('category-item-edit', {
                      active: item.id === currentItem.id,
                    })}
                  >
                    <span className="category-item-content-name">
                      {item.name}
                    </span>
                    <Icon name={item.iconName} />
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </CategoryWrapper>
  )
}

export default Category
