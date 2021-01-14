import {IAccount, ICategory, IList} from '@/libs/models'
import {flatternItems} from '@/libs/utils'
import {ReactElement} from 'react'
import PriceItem from '../price-item'
import {PriceListWrapper} from './style'

interface IProps {
  categories: ICategory[]
  items: IAccount[]
  onDeleteItem: (item: IAccount) => void
}

const PriceList = ({categories, items, onDeleteItem}: IProps) => {
  const list: IList = flatternItems(items)
  const times: string[] = Object.keys(list)

  return (
    <PriceListWrapper className="priceList-wrapper">
      {times.map(
        (time: string): ReactElement => {
          return (
            <PriceItem
              key={time}
              categories={categories}
              time={time}
              list={list[time]}
              onDeleteItem={(item) => onDeleteItem(item)}
            />
          )
        }
      )}
    </PriceListWrapper>
  )
}

export default PriceList
