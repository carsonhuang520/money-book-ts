import React, {useState} from 'react'
import {shallowEqual, useSelector} from 'react-redux'
import {Map} from 'immutable'

import {ICategory} from '@/libs/models'
import {getYearAndMonth, toThousandFilter, confirm} from '@/libs/utils.tsx'
import {categories} from '@/libs/localStorage'

import {Input, DatePicker, Button} from 'antd'
import locale from 'antd/es/date-picker/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'

import Category from '@/components/Category'
import {AccountFormWrapper} from './style'

moment.locale('zh-cn')

const dateFormat: string = 'YYYY-MM-DD'

interface IProps {
  categories: ICategory[]
  isLoading: boolean
  isBtnLoading: boolean
}

const AccountForm = (props: IProps) => {
  const [name, setName] = useState<string>('')
  const [date, setDate] = useState<string>(getYearAndMonth('date'))
  const [money, setMoney] = useState<string>('0')
  const [category, setCategory] = useState<ICategory>({
    type: '',
    name: '',
    iconName: '',
    id: '',
  })
  const {isBtnLoading, isLoading} = props

  const {type} = useSelector((state: Map<string, string>) => {
    return {
      type: state.getIn(['account', 'type']),
    }
  }, shallowEqual)

  const categoriesByType: ICategory[] = categories.filter(
    (category: ICategory) => category.type === type
  )

  const onDateChange = (date: moment.Moment | null, dateString: string) => {
    setDate(dateString)
  }

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const onMoneyBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (money === '') {
      setMoney('0')
    }
  }

  const onMoneyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let money = e.target.value.split(',').join('')
    setMoney(toThousandFilter(money))
  }

  const onMoneyFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (money === '0') {
      setMoney('')
    }
  }

  const validateForm = () => {
    if (date === '') {
      confirm('日期不能为空!')
      return false
    }
    if (name === '') {
      confirm('备注不能为空!')
      return false
    }
    if (money === '0') {
      confirm('金额必须要大于0!')
      return false
    }
    if (category.id === '') {
      confirm('请选择一个类别!')
      return false
    }
    return true
  }

  const onCreateAccount = () => {
    const isValidate: boolean = validateForm()
    if (!isValidate) {
      return
    }
    console.log(name, date, money.split(',').join(''))
  }

  const onClickItem = (item: ICategory) => {
    setCategory(item)
  }

  return (
    <AccountFormWrapper>
      <div className="form-wrapper">
        <ul className="form-list">
          <li className="form-item">
            <label className="form-item-label">日期</label>
            <div className="form-item-content">
              <DatePicker
                className="form-item-input"
                value={moment(date, dateFormat)}
                onChange={onDateChange}
                locale={locale}
              />
            </div>
          </li>
          <li className="form-item">
            <label className="form-item-label">记录</label>
            <div className="form-item-content">
              <Input
                className="form-item-input"
                placeholder="在这里输入备注"
                value={name}
                allowClear
                onChange={onNameChange}
              />
            </div>
          </li>
          <li className="form-item">
            {type === 'outcome' ? (
              <label className="form-item-label">支出</label>
            ) : (
              <label className="form-item-label">收入</label>
            )}
            <div className="form-item-content">
              <Input
                className="form-item-input money"
                value={money}
                allowClear
                onChange={onMoneyChange}
                onFocus={onMoneyFocus}
                onBlur={onMoneyBlur}
              />
            </div>
          </li>
          <li className="form-item">
            <Category
              currentItem={category}
              isLoading={isLoading}
              categories={categoriesByType}
              onClickItem={onClickItem}
            />
          </li>
        </ul>
      </div>
      <div className="button-wrapper">
        {!isBtnLoading ? (
          <Button
            shape="round"
            className="btn-create"
            type="primary"
            onClick={onCreateAccount}
          >
            记一笔
          </Button>
        ) : (
          <Button shape="round" className="btn-create" type="primary" loading>
            加载中
          </Button>
        )}
      </div>
    </AccountFormWrapper>
  )
}

export default AccountForm
