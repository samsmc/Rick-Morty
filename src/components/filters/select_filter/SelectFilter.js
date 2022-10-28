import { useState, useEffect } from 'react';
import './styles_select_filter.css';
import { getCharactersByStatus } from '../../../api/rick_and_morty';
import Card from '../../cards/Card';

export default function SelectFilter() {
	const [characters, setCharacters] = useState([]);
	const [type, setType] = useState('');


	useEffect(() => {
		getCharactersByStatus(type).then(data => {
			setCharacters(data.results);
		});
	}, [type]);
	console.log(characters, 'charactersByType');

	/* const handleCharacters = (characters, allCharacters) => {
		if(!characters){
			setCharacters(allCharacters);
		}
		return characters;
	} */

	// characters ? characters.map : allcharacters.map
	console.log(type, 'type')

	return (
		<>
			<div className="select-dropdown">
				<h1 className="header-title">Rick and Morty Characters</h1>
				<select value={type} onChange={e => setType(e.target.value)}>
					<option defaultValue="0">Filter</option>
					<option value="species=human">Human</option>
					<option value="species=alien">Alien</option>
					<option value="gender=woman">Female</option>
					<option value="gender=men">Male</option>
					<option value="status=alive">Alive</option>
					<option value="status=dead">Dead</option>
				</select>
			</div>
			<Card characters={characters} />
		</>
	);
}


