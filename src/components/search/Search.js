import React from 'react';
import List from '../cards/List';
import './styles_search.css';

export default function Search({ characters, type, setType }) {
	console.log(type, "searchValue");
	return (
		<div className="searchpage">
			<div className="search">
				<div>
					<input
						placeholder="Search..."
						onChange={e => {
							const searchValue = "name=";
							setType(searchValue + e.target.value);
						}}
					></input>
				</div>
				<div style={{ color: "white" }}>results will be displayed</div>
			</div>
			{type ? <List characters={characters} /> : null}
		</div>
	);
}
