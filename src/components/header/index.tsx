import classNames from 'classnames'

import {Button} from 'antd'
import {HeaderWrapper} from './style'

interface IHeaderProps {
  type: string
  onClickType: (type: string) => void
}

const Header = ({type, onClickType}: IHeaderProps) => {
  return (
    <HeaderWrapper className="header-wrapper">
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
    </HeaderWrapper>
  )
}

export default Header
