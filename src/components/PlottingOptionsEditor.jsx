const PlottingOptionsEditor = ({ keys, onIndependentKeyChange, onDependentKeyChange, options }) => {
	return (
		<>
			<label>Independent (X-axis)</label>
			<select
				onChange={(event) => {
					onIndependentKeyChange(event.target.value);
				}}
				value={options.independentName}
			>
				{Object.keys(keys).map((name) => (
					<option value={name}>{name}</option>
				))}
			</select>
			<label>Dependent (Y-axis)</label>
			<select
				onChange={(event) => {
					onDependentKeyChange(event.target.value);
				}}
				value={options.dependentName}
			>
				{Object.keys(keys).map((name) => (
					<option value={name}>{name}</option>
				))}
			</select>
		</>
	);
};

export default PlottingOptionsEditor;
