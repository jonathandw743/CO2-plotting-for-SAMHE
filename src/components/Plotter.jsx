import ReactECharts from "echarts-for-react";
import PlottingOptionsEditor from "./PlottingOptionsEditor";

const Plotter = ({ data, options, keys, onIndependentKeyChange, onDependentKeyChange }) => {
	const independentKey = keys[options.independentName].key;
	const dependentKey = keys[options.dependentName].key;
	const option = {
		title: {
			// text: `${options.dependentName} against ${options.independentName}`,
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
				type: keys[options.independentName].type,
			},
		],
		yAxis: [
			{
				type: keys[options.dependentName].type,
			},
		],
		series: [
			{
				// name: options.dependentName,
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
				keys={keys}
				onIndependentKeyChange={onIndependentKeyChange}
				onDependentKeyChange={onDependentKeyChange}
				options={options}
			/>
			<ReactECharts option={option} />
		</>
	);
};

export default Plotter;
