import classNames from 'classnames'
import {NavLink} from 'react-router-dom'

import Icon from '../Icon'
import {FooterWrapper} from './style'

interface IFooterProps {
  type: string
}

const Footer = ({type}: IFooterProps) => {
  return (
    <FooterWrapper className="nav-wrapper">
      <NavLink
        className={classNames({active: type === 'account'})}
        to="/account"
      >
        <Icon name={'jizhang'} />
        <span>记账</span>
      </NavLink>
      <NavLink className={classNames({active: type === 'detail'})} to="/detail">
        <Icon name={'mingxi'} />
        <span>明细</span>
      </NavLink>
      <NavLink
        className={classNames({active: type === 'statistical'})}
        to="/statistical"
      >
        <Icon name={'baogao'} />
        <span>统计</span>
      </NavLink>
    </FooterWrapper>
  )
}

export default Footer
