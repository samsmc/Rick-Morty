import React from 'react';
import Card from './Card';

export default function List({ characters }) {
	console.log(characters, 'charactersCARD');
	return (
		<div className="center">
			{characters?.map(character => (
				<Card key={character.id} character={character} />
			))}
		</div>
	);
}
