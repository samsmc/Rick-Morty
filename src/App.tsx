import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/error_page/ErrorPage';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import Homepage from './pages/homepage';
import { getCharactersByStatus } from './api/rick_and_morty';

const App = () => {
	const [characters, setCharacters] = useState([]);
	const [type, setType] = useState('');

	useEffect(() => {
		getCharactersByStatus(type).then(data => {
			setCharacters(data.results);
		});
	}, [type]);
	console.log(characters, 'charactersByType');
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Homepage characters={characters} type={type} setType={setType} />} />
					<Route path="/search" element={<Search characters={characters} type={type} setType={setType} />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default App;
