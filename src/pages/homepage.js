import React from 'react';
import SelectFilter from '../components/filters/SelectFilter';
import Header from '../components/header/Header';
//import Pagination from '../components/pagination/Pagination';
import './styles_homepage.css';

const Homepage = ({ characters, type, setType/* , info  */}) => {


	return (
		<>
			<Header />
			<SelectFilter characters={characters} type={type} setType={setType} />
			{/* <Pagination info={info} /> */}
		</>
	);
};

export default Homepage;
