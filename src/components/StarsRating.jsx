import React, { useState, useEffect } from "react";


const Star = ({ starId, rating, onMouseEnter, onMouseLeave, onClick }) => {
  let styleClass = "star-rating-blank";
  if (rating && rating >= starId) {
    styleClass = "star-rating-filled";
  }

  return (
    <div
      className="star"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <svg
        height="55px"
        width="53px"
        className={styleClass}
        viewBox="0 0 25 23"
        data-rating="1"
      >
        <polygon
          strokeWidth="0"
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        />
      </svg>
    </div>
  );
};

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const stars = [1, 2, 3, 4, 5];

  return (
   <>
   
      
        {stars.map((star, i) => (
          <Star
            key={i}
            starId={i}
            rating={hoverRating || rating}
            onMouseEnter={() => setHoverRating(i)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => setRating(i)}
            
          />
        ))}
        
      </>
  );
}

export default StarRating;