import React from "react";
import Card from "./Card";

export default function List({ characters }) {
	return (
		<div className="center">
			{characters?.map(character => (
				<Card key={character.id} character={character} />
			))}
		</div>
	);
}
