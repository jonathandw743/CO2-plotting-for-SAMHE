import PlottingOption from "./PlottingOption";

const PlottingOptionsEditor = ({ keys, onIndependentKeyChange, onDependentKeyChange, options }) => {
	return (
		<div style={plottingOptionsEditorStyle}>
			<PlottingOption labelText={"Independent Key (X-axis): "} onKeyChange={onIndependentKeyChange} keys={keys} defaultKey={options.independentName} />
			<PlottingOption labelText={"Dependent Key (Y-axis): "} onKeyChange={onDependentKeyChange} keys={keys} defaultKey={options.dependentName} />
			{options.independentName == options.dependentName ? (
				<>
					<br />
					"You are plotting a variable against itself, are you sure?"
				</>
			) : (
				<></>
			)}
		</div>
	);
};

const plottingOptionsEditorStyle = {
	margin: "1rem",
	marginBottom: "0",
	flex: "0 1 auto",
};

export default PlottingOptionsEditor;
