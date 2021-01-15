import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import {Map} from 'immutable'
import classNames from 'classnames'

import {
  flatternCategory,
  flatternItemsByType,
  getYearAndMonth,
  toThousandFilter,
} from '@/libs/utils'
import {items, categories} from '@/libs/localStorage'
import {changeAccountTypeAction} from '../create-account/store/actionCreators'

import {Modal} from 'antd'
import Calendar from '@/components/calendar'
import PieChart from '@/components/pie-chart'
import {IAccount, IAccountByType, ICategory, ICategoryType} from '@/libs/models'
import {StatisticalWrapper} from './style'
import EmptyData from '@/components/empty-data'

interface IChartData {
  name: string
  value: number
}

interface IResult {
  chartData: IChartData[]
  totalIncome: number
  totalOutcome: number
}

const Statistical = () => {
  const [dateString, setDateString] = useState<string>(getYearAndMonth('month'))
  const [filterList, setFilterList] = useState<IAccount[]>([])

  const {type} = useSelector((state: Map<string, string>) => {
    return {
      type: state.getIn(['account', 'type']),
    }
  }, shallowEqual)

  useEffect(() => {
    const list: IAccount[] = items.filter(
      (item: IAccount) => item.monthCategory.indexOf(dateString) >= 0
    )
    list.sort((a: IAccount, b: IAccount) => b.timestamp - a.timestamp)
    setFilterList(list)
  }, [dateString])

  const dispatch = useDispatch()

  const onChangeDate = (date: string): void => {
    setDateString(date)
  }

  const getChartData = (
    type: string,
    itemsFlattern: IAccountByType
  ): IChartData[] => {
    return Object.keys(itemsFlattern[type]).map((item: string) => {
      const price = itemsFlattern[type][item].reduce(
        (prev: number, e: IAccount) => {
          prev += e.price
          return prev
        },
        0
      )
      return {
        name: item,
        value: price,
      }
    })
  }

  const getTotalResult = (items: IChartData[]): number => {
    return items.reduce((prev: number, cur: IChartData) => {
      prev += cur.value
      return prev
    }, 0)
  }

  const handleChartData = (
    categories: ICategory[],
    items: IAccount[],
    type: string
  ): IResult => {
    let categoriesFlattern: ICategoryType = flatternCategory(categories)
    let itemsFlattern: IAccountByType = flatternItemsByType(
      items,
      categoriesFlattern
    )
    const keys = Object.keys(itemsFlattern)
    let outcome: IChartData[] = []
    let income: IChartData[] = []
    let totalIncome = 0
    let totalOutcome = 0
    if (keys.length) {
      outcome = itemsFlattern['outcome']
        ? getChartData('outcome', itemsFlattern)
        : []
      income = itemsFlattern['income']
        ? getChartData('income', itemsFlattern)
        : []
      totalOutcome = getTotalResult(outcome)
      totalIncome = getTotalResult(income)
    }
    if (type === 'outcome') {
      return {chartData: outcome, totalIncome, totalOutcome}
    } else {
      return {chartData: income, totalIncome, totalOutcome}
    }
  }

  const {chartData, totalOutcome, totalIncome} = handleChartData(
    categories,
    filterList,
    type
  )
  const balance = totalIncome - totalOutcome
  const isEmpty = chartData.length === 0

  const onClickType = (type: string): void => {
    if (isEmpty) {
      return
    }
    dispatch(changeAccountTypeAction(type))
  }

  const notice = (balance: number): void => {
    if (isEmpty) {
      return
    }
    if (balance < 0) {
      Modal.warning({
        content: '注意收支平衡哦~~~',
        centered: true,
      })
    } else {
      Modal.success({
        content: '攒钱高手~~~',
        centered: true,
      })
    }
  }

  return (
    <StatisticalWrapper>
      <Calendar date={dateString} onChangeDate={onChangeDate} />
      <ul className={'total-wrapper'}>
        <li
          className={classNames(['base', 'total-outcome', {empty: isEmpty}])}
          onClick={() => onClickType('outcome')}
        >
          {'-' + (!isEmpty ? toThousandFilter(totalOutcome) : '')}
        </li>
        <li
          className={classNames(['base', 'total-income', {empty: isEmpty}])}
          onClick={() => onClickType('income')}
        >
          {'+' + (!isEmpty ? toThousandFilter(totalIncome) : '')}
        </li>
      </ul>
      <div className={'total'}>
        <span
          className={classNames([
            'base',
            {deficit: balance < 0, profit: balance >= 0, empty: isEmpty},
          ])}
          onClick={() => notice(balance)}
        >
          {`共计: ${!isEmpty ? toThousandFilter(balance) : ''}`}
        </span>
      </div>
      {!isEmpty ? (
        <PieChart type={type} chartData={chartData} />
      ) : (
        <EmptyData />
      )}
    </StatisticalWrapper>
  )
}

export default Statistical
