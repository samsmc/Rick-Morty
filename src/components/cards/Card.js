import React from 'react';
import './styled.card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'

export default function Card({ characters }) {
	return (
		<div className="center">
			{characters &&
				characters.map(item => (
					<div className="card" key={item.id}>
						<div className="additional">
							<div className="user-card">
								<div className="level center">{item.species}</div>
								<div className="imgRound">
									<img src={item.image} alt={item.name} />
								</div>
								<div className="points center">{item.gender}</div>
							</div>
							<div className="more-info">
								<h1>{item.name}</h1>
								<div className="coords">
									<span>Last known location: {item.location.name}</span>
								</div>
								<div className="coords">
									<span>First seen in: {item.origin.name}</span>
								</div>
								<div className="stats">
									<div>
										<div className="title">Episode</div>
                                        <FontAwesomeIcon icon={faFilm} />
										<div className="value">{item.episode.length}</div>
									</div>
								</div>
							</div>
						</div>
						<div className="general">
							<h1>{item.name}</h1>
							<p>{item.status}</p>
							<span className="more">&gt;</span>
						</div>
					</div>
				))}
		</div>
	);
}
