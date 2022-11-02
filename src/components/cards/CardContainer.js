import React from 'react';
import Card from './Card';

export default function CardContainer({ characters }) {
	const oderByName = characters?.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

	return (
		<div className="center">
			{oderByName.map(character => (
				<Card key={character.id} character={character} />
			))}
		</div>
	);
}
