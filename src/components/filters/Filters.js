import React from 'react';
import './styles_filter.css';
import CardContainer from '../cards/CardContainer';
import Search from '../search/Search';
import Pagination from '../pagination/Pagination';
import SelectFilter from './SelectFilter/SelectFilter';

export default function Filters({
	characters,
	type,
	setType,
	setSearchTerm,
	info,
	fetchNextPage,
	fetchPreviousPage
}) {
	return (
		<section>
			<div className="grouped-filters">
				<Search setSearchTerm={setSearchTerm} />
				<SelectFilter type={type} setType={setType} />
			</div>
			<Pagination info={info} fetchNextPage={fetchNextPage} fetchPreviousPage={fetchPreviousPage} />
			<CardContainer characters={characters} />
		</section>
	);
}
