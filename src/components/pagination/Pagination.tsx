import React from 'react';
import { Info } from '../../App';
import './styles_pagination.css';

interface PaginationType {
	info: Info | undefined;
	fetchNextPage: () => void;
	fetchPreviousPage: () => void;
}

export default function Pagination({ info, fetchNextPage, fetchPreviousPage }: PaginationType) {
	console.log(info);
	return (
		<div>
			<ul className="pagination">
				<li className="page-item">
					<button disabled={!info?.prev} className="" onClick={fetchPreviousPage}>
						Previous
					</button>
				</li>

				<li className="">
					<button disabled={!info?.next} className="" onClick={fetchNextPage}>
						Next
					</button>
				</li>
			</ul>
		</div>
	);
}
