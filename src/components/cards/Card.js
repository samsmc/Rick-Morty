import React from "react";
import "./styles_card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

export default function Card({ character }) {
	return (
		<div className="card" key={character.id}>
			<div className="additional">
				<div className="user-card">
					<div className="level center">{character.species}</div>
					<div className="imgRound">
						<img src={character.image} alt={character.name} />
					</div>
					<div className="points center">{character.gender}</div>
				</div>
				<div className="more-info">
					<h1>{character.name}</h1>
					<div className="coords">
						<span>Last known location: {character.location.name}</span>
					</div>
					<div className="coords">
						<span>First seen in: {character.origin.name}</span>
					</div>
					<div className="stats">
						<div>
							<div className="title">Episode</div>
							<FontAwesomeIcon icon={faFilm} />
							<div className="value">{character.episode.length}</div>
						</div>
					</div>
				</div>
			</div>
			<div className="general">
				<h1>{character.name}</h1>
				<p>{character.status}</p>
				{/* <span className="more">&gt;</span> */}
			</div>
		</div>
	);
}
