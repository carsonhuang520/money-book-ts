import {useState} from 'react'
import classNames from 'classnames'

import {IAccount, ICategory} from '@/libs/models'
import {
  flatternCategory,
  getTotal,
  toThousandFilter,
  confirm,
} from '@/libs/utils'

import Icon from '@/components/Icon'
import {PriceItemWrapper} from './style'

interface IProps {
  categories: ICategory[]
  time: string
  list: IAccount[]
  currentId: string
  onDeleteItem: (item: IAccount) => void
  changeCurrentId: (id: string) => void
}

const PriceItem = ({
  categories,
  time,
  list,
  currentId,
  onDeleteItem,
  changeCurrentId,
}: IProps) => {
  const [isClick, setIsClick] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startY, setStartY] = useState(0)

  const categoriesFlattern = flatternCategory(categories)
  const total = getTotal(list, categoriesFlattern)

  const onTouchStart = (e: React.TouchEvent<HTMLLIElement>): void => {
    setStartX(e.touches[0].clientX)
    setStartY(e.touches[0].clientY)
  }

  const onTouchEnd = (
    e: React.TouchEvent<HTMLLIElement>,
    item: IAccount
  ): void => {
    const endX = e.changedTouches[0].clientX
    const endY = e.changedTouches[0].clientY
    if (startX - endX > 30 && Math.abs(startY - endY) < 30) {
      if (isClick && currentId !== item.id) {
        setIsClick(false)
        return
      }
      changeCurrentId(item.id)
      setIsClick(true)
    } else if (startX - endX < -30) {
      setIsClick(false)
    }
  }

  const onLiClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
    if ((e.target as HTMLLIElement).innerText !== '删除') {
      if (isClick) {
        setIsClick(false)
      }
    }
  }

  return (
    <PriceItemWrapper className="priceItem-wrapper">
      <h3 className="priceItem-header">
        <span className="priceItem-header-time">{time}</span>
        <span
          className={classNames('priceItem-header-price', [
            {profit: total > 0},
            {deficit: total <= 0},
          ])}
        >
          {total > 0 ? '+' + toThousandFilter(total) : toThousandFilter(total)}
        </span>
      </h3>
      <ul className={'priceItem-list'}>
        {list.map((item, index) => {
          return (
            <li
              key={item.id}
              className={`priceItem-item ${
                isClick && currentId === item.id ? 'active' : ''
              }`}
              onTouchStart={(e) => onTouchStart(e)}
              onTouchEnd={(e) => onTouchEnd(e, item)}
              onClick={(e) => onLiClick(e)}
            >
              <div className={`priceItem-item-content`}>
                <span>
                  <Icon name={categoriesFlattern[item.cid].iconName} />
                  <span>{item.name}</span>
                </span>
                <span>
                  {(categoriesFlattern[item.cid].type === 'outcome'
                    ? '-'
                    : '+') + toThousandFilter(item.price)}
                </span>
              </div>
              <div
                className={`priceItem-item-del`}
                onClick={() =>
                  confirm('确定要删除该条记录吗？', () => onDeleteItem(item))
                }
              >
                删除
              </div>
            </li>
          )
        })}
      </ul>
    </PriceItemWrapper>
  )
}

export default PriceItem
