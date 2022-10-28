import React from 'react';
import SelectFilter from '../components/filters/select_filter/SelectFilter';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import './styles_homepage.css';

const Homepage = () => {
	return (
		<>
			<Navbar />
			<Header />
			<SelectFilter />
			<Footer />
		</>
	);
};

export default Homepage;
