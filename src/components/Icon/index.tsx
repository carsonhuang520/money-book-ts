require('@/assets/icon/iconfont.js')

interface IProps {
  name: string
}

const Icon = ({name}: IProps) => {
  return (
    <svg className="icon" aria-hidden="true">
      <use xlinkHref={`#icon-${name}`}></use>
    </svg>
  )
}

export default Icon
