const PlottingOptionsEditor = ({ keys, onIndependentKeyChange, onDependentKeyChange, options }) => {
	return (
		<div style={plottingOptionsEditorStyle}>
			<label>Independent (X-axis)</label>
			<select
				onChange={(event) => {
					onIndependentKeyChange(event.target.value);
				}}
				value={options.independentName}
			>
				{Object.keys(keys).map((name) => (
					<option key={keys[name].id} value={name}>{name}</option>
				))}
			</select>
			<br />
			<label>Dependent (Y-axis)</label>
			<select
				onChange={(event) => {
					onDependentKeyChange(event.target.value);
				}}
				value={options.dependentName}
			>
				{Object.keys(keys).map((name) => (
					<option key={keys[name].id} value={name}>{name}</option>
				))}
			</select>
			<br />
			{options.independentName == options.dependentName ? "You are plotting a variable against itself, are you sure?" : ""}
		</div>
	);
};

const plottingOptionsEditorStyle = {
	margin: "1rem",
	marginBottom: "0",
	flex: "0 1 auto",
};

export default PlottingOptionsEditor;
