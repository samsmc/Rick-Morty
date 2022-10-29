import React from 'react';
import navbarLogo from './ReM.logo.png';
import './styles_navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
	return (
		<>
			<nav className="header-nav">
				<a className="home-icon" href="/">
					<img src={navbarLogo} alt="rick and morty navbar logo" className="navbarLogo-img" />
				</a>
				<a className="search-icon" href="/search">
					<FontAwesomeIcon icon={faMagnifyingGlass} color="white" size="2x" />
				</a>
			</nav>
		</>
	);
}
