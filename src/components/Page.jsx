import Plotter from "./Plotter";
import { useState } from "react";

const Page = () => {
	const [plottingData, setPlottingData] = useState([
		{
			time: "2022-07-20T03:00:00",
			val: 18.2,
			val2: 100.3,
		},
		{
			time: "2022-07-20T04:00:00",
			val: 18.9,
			val2: 85,
		},
		{
			time: "2022-07-20T05:00:00",
			val: 19.4,
			val2: 4,
		},
	]);
	const [plottingIndependentKeys, setPlottingIndependentKeys] = useState({
		Time: "time",
	});
	const [plottingDependentKeys, setPlottingDependentKeys] = useState({
		CO2: "val",
		"Another Metric": "val2",
	});
	const [plottingOptions, setPlottingOptions] = useState({
		independentName: "Time",
		dependentName: "CO2",
	});
	const onPlottingIndependentKeyChange = (name) => {
		setPlottingOptions({ ...plottingOptions, independentName: name });
	};
	const onPlottingDependentKeyChange = (name) => {
		setPlottingOptions({ ...plottingOptions, dependentName: name });
	};
	return (
		<Plotter
			data={plottingData}
			options={plottingOptions}
			independentKeys={plottingIndependentKeys}
			dependentKeys={plottingDependentKeys}
			onIndependentKeyChange={onPlottingIndependentKeyChange}
			onDependentKeyChange={onPlottingDependentKeyChange}
		/>
	);
};

export default Page;
