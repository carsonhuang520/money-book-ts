import {Fragment, useCallback, useState} from 'react'

import {IAccount} from '@/libs/models'
import {getYearAndMonth} from '@/libs/utils'
import {categories, items} from '@/libs/localStorage'

import Calendar from '@/components/calendar'
import EmptyData from '@/components/empty-data'
import PriceList from './c-cpns/price-list'

interface IProps {
  message: string
}

const AccountList = ({message}: IProps) => {
  const [accountList, setAccountList] = useState<IAccount[]>(items)
  const [dateString, setDateString] = useState<string>(getYearAndMonth('month'))

  const onChangeDate = useCallback((date: string) => {
    setDateString(date)
  }, [])

  const onDeleteItem = (item: IAccount): void => {}

  return (
    <Fragment>
      <Calendar date={dateString} onChangeDate={onChangeDate} />
      {accountList.length ? (
        <PriceList
          categories={categories}
          items={items}
          onDeleteItem={(item: IAccount) => onDeleteItem(item)}
        />
      ) : (
        <EmptyData />
      )}
    </Fragment>
  )
}

export default AccountList
