import React from 'react';
import './styles_filters.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Filter() {
	return (
		<>
			<h1 className="header-title">Find out about Rick and Morty Characters</h1>
			<form id="app-cover">
				<div id="select-box">
					<input type="checkbox" id="options-view-button" />
					<div id="select-button" className="brd">
						<div id="selected-value">
							<span>Filter</span>
						</div>
						<div id="chevrons">
							<FontAwesomeIcon icon={faChevronDown} />
						</div>
					</div>
					<div id="options">
						<div className="option">
							<input className="s-c top" type="radio" name="platform" defaultValue="codepen" />
							<input className="s-c bottom" type="radio" name="platform" defaultValue="codepen" />

							<span className="label">Human</span>
							<span className="opt-val">Human</span>
						</div>
						<div className="option">
							<input className="s-c top" type="radio" name="platform" defaultValue="dribbble" />
							<input className="s-c bottom" type="radio" name="platform" defaultValue="dribbble" />

							<span className="label">Alien</span>
							<span className="opt-val">Alien</span>
						</div>
						<div className="option">
							<input className="s-c top" type="radio" name="platform" defaultValue="behance" />
							<input className="s-c bottom" type="radio" name="platform" defaultValue="behance" />

							<span className="label">Female</span>
							<span className="opt-val">Female</span>
						</div>
						<div className="option">
							<input className="s-c top" type="radio" name="platform" defaultValue="hackerrank" />
							<input className="s-c bottom" type="radio" name="platform" defaultValue="hackerrank" />

							<span className="label">Male</span>
							<span className="opt-val">Male</span>
						</div>
						<div className="option">
							<input className="s-c top" type="radio" name="platform" defaultValue="stackoverflow" />
							<input className="s-c bottom" type="radio" name="platform" defaultValue="stackoverflow" />

							<span className="label">Alive</span>
							<span className="opt-val">Alive</span>
						</div>
						<div className="option">
							<input className="s-c top" type="radio" name="platform" defaultValue="freecodecamp" />
							<input className="s-c bottom" type="radio" name="platform" defaultValue="freecodecamp" />

							<span className="label">Dead</span>
							<span className="opt-val">Dead</span>
						</div>
						<div id="option-bg" />
					</div>
				</div>
			</form>
		</>
	);
}
