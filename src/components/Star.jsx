import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

const Star = ({ rate, count }) => {
	const StarRating = Array.from({ length: 5 }, (elem, index) => {
		let number = index + 0.5;

		return (
			<span key={index}>
				{rate > index + 1 ? (
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

// const Wrapper = styled.section`
// 	.icon-style {
// 		display: flex;
// 		gap: 0.2rem;
// 		align-items: center;
// 		justify-content: flex-start;
// 	}

// 	.icon {
// 		font-size: 2rem;
// 		color: orange;
// 	}

// 	.empty-icon {
// 		font-size: 2.6rem;
// 	}
// `;
export default Star;
