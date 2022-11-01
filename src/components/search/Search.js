import React from 'react';
import './styles_search.css';

export default function Search({ setSearchTerm }) {
	return (
		<div className="searchpage">
			<div className="search">
				<div>
					<input
						placeholder="Search by name..."
						onChange={e => {
							setSearchTerm(e.target.value);
						}}
					></input>
				</div>
			</div>
		</div>
	);
}
