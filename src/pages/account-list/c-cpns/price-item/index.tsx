import {IAccount, ICategory} from '@/libs/models'
import {toThousandFilter} from '@/libs/utils'

import Icon from '@/components/Icon'
import {PriceItemWrapper} from './style'

interface IProps {
  categories: ICategory[]
  time: string
  list: IAccount[]
  onDeleteItem: (item: IAccount) => void
}

const PriceItem = ({categories, time, list, onDeleteItem}: IProps) => {
  return (
    <PriceItemWrapper className={'priceItem-wrapper'}>
      <h3 className={'priceItem-header'}>
        <span className={'priceItem-header-time'}>{time}</span>
        <span
          className={`priceItem-header-price ${
            total > 0 ? 'profit' : 'deficit'
          }`}
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
                isClick && current === index ? 'active' : ''
              }`}
              onTouchStart={(e) => this.onTouchStart(e)}
              onTouchEnd={(e) => this.onTouchEnd(e, index)}
              onClick={(e) => this.onLiClick(e)}
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
