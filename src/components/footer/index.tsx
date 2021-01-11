import classNames from 'classnames'

import Icon from '../Icon'
import {FooterWrapper} from './style'

interface IFooterProps {
  type: string
  onClickNav: (type: string) => void
}

const Footer = ({type, onClickNav}: IFooterProps) => {
  const clickNav = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    type: string
  ) => {
    e.preventDefault()
    onClickNav(type)
  }
  return (
    <FooterWrapper className="nav-wrapper">
      <a
        className={classNames({active: type === 'account'})}
        href={'/'}
        onClick={(e) => clickNav(e, 'account')}
      >
        <Icon name={'jizhang'} />
        <span>记账</span>
      </a>
      <a
        className={classNames({active: type === 'detail'})}
        href={'/'}
        onClick={(e) => clickNav(e, 'detail')}
      >
        <Icon name={'mingxi'} />
        <span>明细</span>
      </a>
      <a
        className={classNames({active: type === 'statistical'})}
        href={'/'}
        onClick={(e) => clickNav(e, 'statistical')}
      >
        <Icon name={'baogao'} />
        <span>统计</span>
      </a>
    </FooterWrapper>
  )
}

export default Footer
