import React from 'react';
import { Info } from '../../App';
import './styles_pagination.css';

interface PaginationType {
	info: Info | undefined;
	fetchNextPage: () => void;
	fetchPreviousPage: () => void;
}

export default function Pagination({ info, fetchNextPage, fetchPreviousPage }: PaginationType) {
	/* console.log(info); */
	return (
		<div className="pagination">
			<button disabled={!info?.prev} className="btn-page" onClick={fetchPreviousPage}>
				Previous
			</button>
			<button disabled={!info?.next} className="btn-page" onClick={fetchNextPage}>
				Next
			</button>
		</div>
	);
}
