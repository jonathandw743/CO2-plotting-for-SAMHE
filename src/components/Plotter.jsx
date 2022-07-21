import ReactECharts from "echarts-for-react";
import PlottingOptionsEditor from "./PlottingOptionsEditor";

const Plotter = ({ data, options, independentKeys, dependentKeys, onIndependentKeyChange, onDependentKeyChange }) => {
	const independentKey = independentKeys[options.independentName].key;
	const dependentKey = dependentKeys[options.dependentName].key;
	const option = {
		title: {
			text: `${options.dependentName} against ${options.independentName}`,
		},
		tooltip: {
			trigger: "axis",
		},
		legend: {
			//   data:['CO2']
		},
		toolbox: {
			feature: {
				saveAsImage: {},
			},
		},
		grid: {
			left: "50",
			right: "50",
			bottom: "50",
			//   containLabel: true
			show: true,
		},
		xAxis: [
			{
				type: independentKeys[options.independentName].type,
			},
		],
		yAxis: [
			{
				type: dependentKeys[options.dependentName].type,
			},
		],
		series: [
			{
				name: options.dependentName,
				type: "line",
				// stack: '总量',
				// areaStyle: {normal: {}},
				data: data.map((dataPoint) => [dataPoint[independentKey], dataPoint[dependentKey]]),
			},
		],
	};
	return (
		<>
			<PlottingOptionsEditor
				independentKeys={independentKeys}
				dependentKeys={dependentKeys}
				onIndependentKeyChange={onIndependentKeyChange}
				onDependentKeyChange={onDependentKeyChange}
			/>
			<ReactECharts option={option} />
		</>
	);
};

export default Plotter;
