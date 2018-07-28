import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import _ from 'lodash'

const MyStockChart = (props) => {
  const datas = [];

  // transfer data from object to array
  props.data.map( (data) => {
    datas.push(Object.values(data))
  })

  // transfer date time to required format
  for(var k in datas) {
    datas[k][0] = new Date(datas[k][0]).getTime()
  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={'stockChart'}
      options={
        {
        title: {
            text: 'QUALCOMM Stock Price'
        },
        series: [{
            name: 'QUALCOMM',
            data: datas,
          }]
        }
      }
    />
  )
}


export default MyStockChart