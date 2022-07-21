const PlottingOption = ({labelText, onKeyChange, keys, defaultKey}) => {
	return (
		<div>
			<label>{labelText}</label>
			<select
				onChange={(event) => {
					onKeyChange(event.target.value);
				}}
				value={defaultKey}
			>
				{Object.keys(keys).map((name) => (
					<option key={keys[name].id} value={name}>
						{name}
					</option>
				))}
			</select>
		</div>
	);
};

export default PlottingOption;
