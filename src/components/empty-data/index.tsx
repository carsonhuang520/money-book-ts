import {useHistory} from 'react-router-dom'
import {Empty, Button} from 'antd'

const EmptyData = () => {
  const history = useHistory()

  return (
    <Empty
      imageStyle={{
        height: 60,
      }}
      description={<span style={{color: 'lightgrey'}}>暂无数据</span>}
    >
      <Button type="primary" onClick={() => history.push('/')}>
        记一笔
      </Button>
    </Empty>
  )
}

export default EmptyData
