import {useSelector, shallowEqual, useDispatch} from 'react-redux'
import classNames from 'classnames'
import {Map} from 'immutable'

import {changeAccountTypeAction} from '@/pages/create-account/store/actionCreators'

import {Button} from 'antd'
import {HeaderWrapper} from './style'
import {Fragment} from 'react'
interface IProps {
  pathname: string
}

const Header = (props: IProps) => {
  const {type} = useSelector((state: Map<string, string>) => {
    return {
      type: state.getIn(['account', 'type']),
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  const onClickType = (type: string) => {
    dispatch(changeAccountTypeAction(type))
  }

  return (
    <HeaderWrapper className="header-wrapper">
      {props.pathname === '/detail' ? (
        '明细'
      ) : (
        <Fragment>
          <Button
            shape="round"
            className={classNames('btn', {active: type === 'outcome'})}
            onClick={() => onClickType('outcome')}
          >
            支出
          </Button>
          <Button
            shape="round"
            className={classNames('btn', {active: type === 'income'})}
            onClick={() => onClickType('income')}
          >
            收入
          </Button>
        </Fragment>
      )}
    </HeaderWrapper>
  )
}

export default Header
