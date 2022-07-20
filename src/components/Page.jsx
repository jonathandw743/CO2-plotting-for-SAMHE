import React from 'react';
import ReactECharts from 'echarts-for-react';

const Page = ({axisData}) => {
  const option = {
    title: {
      text: 'CO2 against time'
    },
    tooltip : {
      trigger: 'axis'
    },
    legend: {
      data:['CO2']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'time',
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name:'CO2',
        type:'line',
        // stack: '总量',
        // areaStyle: {normal: {}},
        data: axisData
      }
    ]
  };

  return <ReactECharts
    option={option}
    style={{ height: 400 }}
  />;
};

export default Page;