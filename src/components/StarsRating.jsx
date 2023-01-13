import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const StarsRating = ({ rateVal }) => {
	const [rating, setRating] = useState(null);
	const [hover, setHover] = useState(null);

	console.log('ratingValue', rating);

	// useEffect = () => {
	// 	rateVal(rating);
	// };

	return (
		<div>
			{[...Array(5)].map((star, i) => {
				const ratingValue = i + 1;

				return (
					<label key={i}>
						<input
							type="radio"
							name="rating"
							style={{ display: 'none' }}
							value={ratingValue}
							onClick={() => setRating(ratingValue)}
						/>
						<FaStar
							className="star"
							color={ratingValue <= (hover || rating) ? 'orange' : 'gray'}
							size={20}
							onMouseEnter={() => setHover(ratingValue)}
							onMouseLeave={() => setHover(null)}
						/>
					</label>
				);
			})}
			<p style={{ marginTop: '10px' }}>rating is {rating}</p>
		</div>
	);
};

export default StarsRating;
