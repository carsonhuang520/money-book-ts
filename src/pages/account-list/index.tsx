import {Fragment, useCallback, useState, useEffect} from 'react'

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
  const [filterList, setFilterList] = useState<IAccount[]>([])
  const [dateString, setDateString] = useState<string>(getYearAndMonth('month'))

  useEffect(() => {
    const list: IAccount[] = accountList.filter(
      (item: IAccount) => item.monthCategory.indexOf(dateString) >= 0
    )
    setFilterList(list)
  }, [dateString, accountList])

  const onChangeDate = useCallback((date: string): void => {
    setDateString(date)
  }, [])

  const onDeleteItem = useCallback(
    (item: IAccount): void => {
      const list = accountList.filter((e: IAccount) => e.id !== item.id)
      setAccountList(list)
    },
    [accountList]
  )

  return (
    <Fragment>
      <Calendar date={dateString} onChangeDate={onChangeDate} />
      {filterList.length ? (
        <PriceList
          categories={categories}
          items={filterList}
          onDeleteItem={(item: IAccount) => onDeleteItem(item)}
        />
      ) : (
        <EmptyData />
      )}
    </Fragment>
  )
}

export default AccountList
