import React from 'react';
import SelectFilter from '../components/filters/SelectFilter';
import Header from '../components/header/Header';
import './styles_homepage.css';

const Homepage = ({ characters, type, setType, setSearchTerm }) => {
	return (
		<>
			<Header />
			<SelectFilter characters={characters} type={type} setType={setType} setSearchTerm={setSearchTerm} />
		</>
	);
};

export default Homepage;
