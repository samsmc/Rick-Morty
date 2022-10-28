import axios from 'axios';

export const getCharactersByStatus = async (type) => {
	const URL = `https://rickandmortyapi.com/api/character/?${type}`;
	try {
	  const data = await axios.get(URL);
	  return data.data;
	} catch (error) {
	  console.log(error, 'error');
	}
  };
