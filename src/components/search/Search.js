import React from 'react';
import CardContainer from '../cards/CardContainer';
import './styles_search.css';

export default function Search({ characters, type, setType }) {
	console.log(type, 'type');
	const searchValue = 'name=';
	return (
		<div className="searchpage">
			<div className="search">
				<div>
					<input
						placeholder="Search..."
						onChange={e => {
							setType(searchValue + e.target.value);
						}}
					></input>
				</div>
				<div style={{ color: 'white' }}>results will be displayed</div>
			</div>
			{type.length > 5 ? <CardContainer characters={characters} /> : null}
		</div>
	);
}
