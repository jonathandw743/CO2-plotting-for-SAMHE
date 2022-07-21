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
	const [plottingKeys, setPlottingKeys] = useState({
		Time: {
			key: "time",
			type: "time",
		},
		CO2: { key: "val", type: "value" },
		"Another Metric": { key: "val2", type: "log" },
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
			keys={plottingKeys}
			onIndependentKeyChange={onPlottingIndependentKeyChange}
			onDependentKeyChange={onPlottingDependentKeyChange}
		/>
	);
};

export default Page;
