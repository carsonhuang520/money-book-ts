import {Modal} from 'antd'
import {QuestionCircleOutlined} from '@ant-design/icons'
import {IAccount, ICategory, ICategoryType, IList} from './models'

export const getYearAndMonth = (type: string): string => {
  const date: Date = new Date()
  const year: number = date.getFullYear()
  const month: number = date.getMonth() + 1
  const day: number = date.getDate()
  return type === 'date'
    ? `${year}-${month >= 10 ? month : '0' + month}-${
        day >= 10 ? day : '0' + day
      }`
    : `${year}-${month >= 10 ? month : '0' + month}`
}

export const toThousandFilter = (num: string | number): string => {
  return (+num || 0)
    .toString()
    .replace(/^-?\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

// TODO: any 类型未解决
export const confirm = (title: string, okFn?: any) => {
  Modal.confirm({
    title: title,
    centered: true,
    icon: <QuestionCircleOutlined />,
    okText: '确认',
    cancelText: '取消',
    onOk: okFn ? okFn : () => {},
  })
}

export const flatternItems = (items: IAccount[]): IList => {
  let list: IList = {}
  items.forEach((item: IAccount) => {
    if (!list[item.date]) {
      list[item.date] = []
    }
    list[item.date].push(item)
  })
  return list
}

export const flatternCategory = (categories: ICategory[]): ICategoryType => {
  return categories.reduce((prev: ICategoryType, item: ICategory) => {
    prev[item.id] = item
    return prev
  }, {})
}

export const getTotal = (
  list: IAccount[],
  categoriesFlattern: ICategoryType
): number => {
  return list.reduce((prev: number, cur: IAccount) => {
    prev =
      prev +
      (categoriesFlattern[cur.cid].type === 'outcome'
        ? -1 * cur.price
        : cur.price)
    return prev
  }, 0)
}
