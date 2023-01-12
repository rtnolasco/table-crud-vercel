import React from 'react';
import Star from './Star';

export const TableRow = ({ product, loading }) => {
	const rate = product.rating.rate;
	const count = product.rating.count;
	return (
		<>
			{/* <td></td> */}
			<td colSpan="2">{product.description}</td>
			<td style={{ display: 'flex' }}></td>
			<td>{rate}</td>
			<td>{count}</td>
			<td>
				<Star rate={rate} count={count} />
			</td>
			<td></td>
		</>
	);
};
