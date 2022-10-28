import axios from 'axios';

export const getCharacters = async (type) => {
  const URL = "https://rickandmortyapi.com/api/character";
	try {
		const data = await axios.get(URL);
		return data.data;
	} catch (error) {
		console.log(error);
	}
};

/* export const getAllActivities = async () => {
  const URL = "https://bored-api.firebaseapp.com/api/activity/list";
  try {
    const data = await axios.get(URL);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}; */

/* export const getWeatherData = async (lat, lng) => {
	try {
		const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/weather', {
			params: { lat: lat, lon: lng },
			headers: {
				'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
				'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
			}
		});

		return data;
	} catch (error) {
		console.log(error);
	}
}; */
