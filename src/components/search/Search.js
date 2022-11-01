import React from 'react';
import './styles_search.css';

export default function Search({ setSearchTerm }) {
	return (
		<>
			<input
				className="input-search"
				placeholder="Search by name..."
				onChange={e => {
					setSearchTerm(e.target.value);
				}}
			></input>
		</>
	);
}
