import React from 'react';
import './styles_select_filter.css';

export default function SelectFilter() {
	return (
		<div className="select-dropdown">
			<h1 className="header-title">Rick and Morty Characters</h1>
			<select>
				<option selected value="0">
					Filter
				</option>
				<option value="Human">Human</option>
				<option value="Alien">Alien</option>
				<option value="Woman">Female</option>
				<option value="Men">Male</option>
				<option value="Alive">Alive</option>
				<option value="Dead">Dead</option>
			</select>
		</div>
	);
}
