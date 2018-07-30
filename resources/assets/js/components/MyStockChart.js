import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'


const changeDateTime = (originDatas) => {
  const datas = [];

  // transfer each data from object to array
  originDatas.map( (data) => {
    datas.push(Object.values(data))
  })

  // transfer date time to required format
  for(var k in datas) {
    datas[k][0] = new Date(datas[k][0]).getTime()
  }

  return datas;
}

const MyStockChart = (props) => {
  const data = changeDateTime(props.data);
  const maxProfit = changeDateTime(props.maxProfit);

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
            data: data,
          },{
            name: 'Max Profit Period',
            data: maxProfit,
            color: 'red'
          }],
        }
      }
    />
  )
}


export default MyStockChart