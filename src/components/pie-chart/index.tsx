import {useEffect, useState} from 'react'
import echarts from 'echarts'

interface IChartData {
  name: string
  value: number
}

interface IProps {
  type: string
  chartData: IChartData[]
}

const PieChart = ({chartData}: IProps) => {
  const [myChart, setMyChart] = useState(null)
  const [options, setOptions] = useState({})

  useEffect(() => {
    let myChart = echarts.init(
      document.getElementById('pie-chart') as HTMLElement
    )
    let option = {
      color: [
        'rgb(254,67,101)',
        'rgb(252,157,154)',
        'rgb(249,205,173)',
        'rgb(200,200,169)',
        'rgb(131,175,155)',
      ],
      title: {
        text: '',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: [],
      },
      series: [
        {
          name: '支出',
          type: 'pie',
          radius: '50%',
          center: ['50%', '50%'],
          data: [],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    }
    myChart.setOption(option)
    setOptions(option)
    // TODO chart 的类型
    setMyChart(myChart as any)
  }, [])

  const changeData = (data: IChartData[], myChart: any, option: {}) => {
    const legendData: string[] = data.map((item: IChartData) => item.name)
    let temp = JSON.parse(JSON.stringify(option))
    temp.legend.data = legendData
    temp.series[0].data = data
    myChart.setOption(temp, true)
  }

  useEffect(() => {
    if (myChart !== null && options !== null) {
      changeData(chartData, myChart, options)
    }
  }, [chartData, myChart, options])

  return (
    <div
      id={'pie-chart'}
      style={{
        width: '100%',
        height: '400px',
        margin: '10px auto 0',
      }}
    />
  )
}

export default PieChart
