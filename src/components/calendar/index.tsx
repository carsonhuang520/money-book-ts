import {DatePicker} from 'antd'
import moment from 'moment'
import locale from 'antd/es/date-picker/locale/zh_CN'
import {CalendarWrapper} from './style'
import 'moment/locale/zh-cn'

interface IProps {
  date: string
  onChangeDate: (date: string) => void
}

moment.locale('zh-cn')

const dateFormat: string = 'YYYY-MM'

const Calendar = ({date, onChangeDate}: IProps) => {
  return (
    <CalendarWrapper className={'calendar-wrapper'}>
      <DatePicker
        className={'calendar'}
        picker="month"
        value={moment(date, dateFormat)}
        locale={locale}
        onChange={(date, dateString) => onChangeDate(dateString)}
      />
    </CalendarWrapper>
  )
}

export default Calendar
