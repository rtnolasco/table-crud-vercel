import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const StarsRating = (e, props, ref) => {
	const [srating, setSrating] = useState(null);
	const [hover, setHover] = useState(null);

	// console.log('props', props);
	// console.log('evt', e.target);

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
							// onChange={(e) => props.onChange(e.target)}
						/>
						<FaStar
							className="star"
							color={ratingValue <= (hover || srating) ? 'orange' : 'gray'}
							size={20}
							onMouseEnter={() => setHover(ratingValue)}
							onMouseLeave={() => setHover(null)}
						/>
					</label>
				);
			})}
			<p style={{ marginTop: '10px' }}>rating is {srating}</p>
		</div>
	);
};

export default StarsRating;
