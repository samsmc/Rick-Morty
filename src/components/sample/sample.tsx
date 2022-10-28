import React, { useState, useEffect } from 'react';
import { StyledContainer } from './sample.style';
// import { StyledCode, StyledContainer, StyledLogo, StyledTitle } from './sample.style';
// import { ThemeProvider } from 'styled-components';
// import { lightTheme } from '../characters_table/theme';
// import logo from './logo.png';
import { getCharacters } from '../../api/rick_and_morty';
// import ScTable from '../characters_table/Table';
// import LgWidget from '../LgWidget_table/LgWidget';
import Card from '../cards/Card';
const Sample = () => {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		getCharacters().then(data => {
			setCharacters(data.results);
		});
	}, []);
	console.log(characters, 'characters');

	return (
		<StyledContainer>
			{/* <StyledLogo src={logo} alt="Appspace logo" />
			<StyledTitle>Rick and Morty</StyledTitle>
			<section>
				<h3>Visual Studio Code setup</h3>
				<p>We recommend these extensions in VS Code before starting the challenge:</p>
				<p>
					<a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">ESLint</a>
				</p>
			</section>
			<section>
				<h3>How to start the project</h3>
				<p>
					Install dependencies: <StyledCode>yarn install --pure-lockfile</StyledCode>
				</p>
			</section> */}

			{/* <ThemeProvider theme={lightTheme}>
				<div className="table-container">
					<ScTable data={data} />
				</div>
			</ThemeProvider> */}

			{/* <LgWidget characters={characters} /> */}
			<div className="center">
				<Card characters={characters} />
			</div>
		</StyledContainer>
	);
};

export default Sample;
