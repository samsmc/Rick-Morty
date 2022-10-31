import React from 'react';
import './styles_select_filter.css';
import List from '../../cards/List';

export default function SelectFilter({ characters, type, setType }) {
	return (
		<>
			<div className="select-dropdown">
				<h1 className="header-title">Rick and Morty Characters</h1>
				<select value={type} onChange={e => setType(e.target.value)}>
					<option defaultValue="0">Filter</option>
					<option value="species=human">Human</option>
					<option value="species=alien">Alien</option>
					<option value="gender=woman">Female</option>
					<option value="gender=men">Male</option>
					<option value="status=alive">Alive</option>
					<option value="status=dead">Dead</option>
				</select>
			</div>
			<List characters={characters} />
		</>
	);
}
