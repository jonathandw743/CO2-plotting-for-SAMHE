const PlottingOptionsEditor = ({ independentKeys, dependentKeys, onIndependentKeyChange, onDependentKeyChange }) => {
	return (
		<>
			<label>Independent (X-axis)</label>
			<select
				onChange={(event) => {
          onIndependentKeyChange(event.target.value);
        }}
			>
				{Object.keys(independentKeys).map((name) => (
					<option value={name}>{name}</option>
				))}
			</select>
			<label>Dependent (Y-axis)</label>
			<select
				onChange={(event) => {
          onDependentKeyChange(event.target.value);
        }}
			>
				{Object.keys(dependentKeys).map((name) => (
					<option value={name}>{name}</option>
				))}
			</select>
		</>
	);
};

export default PlottingOptionsEditor;
