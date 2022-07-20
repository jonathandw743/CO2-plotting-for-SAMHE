import ReactECharts from "echarts-for-react";

const Plotter = ({data, options}) => {
    const option = {
        title: {
          text: `${options.dependentName} against ${options.independentName}`
        },
        tooltip : {
          trigger: 'axis'
        },
        legend: {
        //   data:['CO2']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '50',
          right: '50',
          bottom: '50',
        //   containLabel: true
        show: true,

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
            data: data.map((dataPoint) => [
                dataPoint[options.independentKey],
                dataPoint[options.dependentKey]
            ])
          }
        ]
      };
    return <ReactECharts option={option} />;
};

export default Plotter;
