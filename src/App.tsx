import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/error_page/ErrorPage';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Homepage from './pages/homepage';
import Pagination from './components/pagination/Pagination';
import { fetchUrl, getCharactersByName, getCharactersByStatus } from './api/rick_and_morty';

export interface Info {
	count: number;
	pages: number;
	next: string;
	prev?: any;
}

export interface Origin {
	name: string;
	url: string;
}

export interface Location {
	name: string;
	url: string;
}

export interface Result {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: Origin;
	location: Location;
	image: string;
	episode: string[];
	url: string;
	created: Date;
}

export interface Data {
	info: Info | undefined;
	results: Result[];
}

const App = () => {
	const [characters, setCharacters] = useState<Result[]>([]);
	const [type, setType] = useState<string>('');
	const [info, setInfo] = useState<Info>();
	const [searchTerm, setSearchTerm] = useState<string>('');

	const fetchUrlPage = (url?: string) => {
		fetchUrl(url).then((data: Data) => {
			setCharacters(data.results);
			setInfo(data.info);
		});
	};

	useEffect(() => {
		getCharactersByName(searchTerm).then((data: Data) => {
			setCharacters(data.results);
			setInfo(data.info);
		});
	}, [searchTerm]);

	useEffect(() => {
		getCharactersByStatus(type).then((data: Data) => {
			setCharacters(data.results);
			setInfo(data.info);
		});
	}, [type]);

	useEffect(() => {
		fetchUrlPage();
	}, []);

	const fetchNextPage = () => {
		if (info == null) return;
		const hasNextPage = info.next != null;
		if (hasNextPage) {
			fetchUrlPage(info.next);
		}
	};

	const fetchPreviousPage = () => {
		if (info == null) return;
		const hasPreviousPage = info.prev != null;
		if (hasPreviousPage) {
			fetchUrlPage(info.prev);
		}
	};

	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={
							<Homepage
								characters={characters}
								type={type}
								setType={setType}
								setSearchTerm={setSearchTerm}
							/>
						}
					/>
					<Route path="*" element={<ErrorPage />} />
				</Routes>
				<Pagination info={info} fetchNextPage={fetchNextPage} fetchPreviousPage={fetchPreviousPage} />
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default App;
