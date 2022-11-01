import React from 'react';
import './styles_search.css';

export default function Search({ setSearchTerm }) {
	return (
		<div className="searchpage">
			<div className="search">
				<div>
					<input
						placeholder="Search..."
						onChange={e => {
							setSearchTerm(e.target.value);
						}}
					></input>
				</div>
				<div style={{ color: 'white' }}>results will be displayed</div>
			</div>
		</div>
	);
}
