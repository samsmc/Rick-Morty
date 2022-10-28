import { useState, useEffect } from 'react';
import { getCharacters } from '../api/rick_and_morty';
import Card from '../components/cards/Card';
import SelectFilter from '../components/filters/select_filter/SelectFilter';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import './styles_homepage.css';

const Homepage = () => {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		getCharacters().then(data => {
			setCharacters(data.results);
		});
	}, []);
	console.log(characters, 'characters');

	return (
		<>
			<Navbar />
			<Header />
			<SelectFilter />
			<Card characters={characters} />
			<Footer />
		</>
	);
};

export default Homepage;
