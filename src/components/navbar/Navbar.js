import React from 'react';
import navbarLogo from './ReM.logo.png';
import './styles_navbar.css';


export default function Navbar() {
	return (
		<>
			<nav className="header-nav">
				<a className="home-icon" href="/Rick-Morty">
					<img src={navbarLogo} alt="rick and morty navbar logo" className="navbarLogo-img" />
				</a>
			</nav>
		</>
	);
}
