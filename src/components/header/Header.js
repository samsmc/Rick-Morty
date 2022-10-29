import React from 'react';
import logo from './RickAndMorty.png';
import './styles_header.css';

export default function Header() {
	return (
		<header className="header-main">
			<section className="header">
				<div className="logo-image">
					<img src={logo} alt="rick and morty logo" className="logo-img" />
				</div>
			</section>
		</header>
	);
}
