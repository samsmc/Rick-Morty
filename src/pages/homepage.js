import React from 'react';
import Filters from '../components/filters/Filters';
import Header from '../components/header/Header';
import './styles_homepage.css';

const Homepage = ({ characters, type, setType, setSearchTerm, info, fetchNextPage, fetchPreviousPage }) => {
	return (
		<>
			<Header />
			<Filters
				characters={characters}
				type={type}
				setType={setType}
				setSearchTerm={setSearchTerm}
				info={info}
				fetchNextPage={fetchNextPage}
				fetchPreviousPage={fetchPreviousPage}
			/>
		</>
	);
};

export default Homepage;
