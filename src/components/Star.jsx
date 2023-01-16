import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

const Star = ({ rate, count }) => {
	const StarRating = Array.from({ length: 5 }, (elem, index) => {
		let number = index + 0.5;

		return (
			<span key={index}>
				{rate >= index + 1 ? (
					<FaStar className="icon" />
				) : rate > number ? (
					<FaStarHalfAlt className="icon" />
				) : (
					<AiOutlineStar className="ïcon" />
				)}
			</span>
		);
	});
	// console.log('starrating', rate);

	return (
		<>
			<div className="rating">{rate}</div>
			<div className="icon-style">{StarRating}</div>
			{/* <div className="rating">{count} reviews</div> */}
		</>
	);
};

export default Star;
