import React from 'react';
import './styles_pagination.css';

export default function Pagination({ info, /* handlePreviousPage, handleNextPage */ }) {

	return (
		<div>
			<ul className="pagination">
				{info.prev ? (
					<li className="page-item">
						<button className="" /* onClick={handlePreviousPage} */>
							Previous
						</button>
					</li>
				) : null}

				{info.next ? (
					<li className="">
						<button className="" /* onClick={handleNextPage} */>
							Next
						</button>
					</li>
				) : null}
			</ul>
			;
		</div>
	);
}
