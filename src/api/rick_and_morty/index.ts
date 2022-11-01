import axios from 'axios';
import { Data } from '../../App';

const baseURL: string = 'https://rickandmortyapi.com/api/character';

const handleRequest = async (url: string) => {
	try {
		const data = await axios.get(url);
		return data.data;
	} catch (error) {
		console.log(error, 'error');
	}
};

export const getCharactersByStatus = async (type: string): Promise<Data> => {
	const URL = `${baseURL}/?${type}`;
	const data = await handleRequest(URL);
	return data;
};

export const fetchUrl = async (url = baseURL): Promise<Data> => {
	const data = await handleRequest(url);
	return data;
};

export const getCharactersByName = async (name: string): Promise<Data> => {
	const searchValue = `name=${name}`;
	const URL = `${baseURL}/?${searchValue}`;
	const data = await handleRequest(URL);
	return data;
};
