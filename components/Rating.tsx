"use client";

import { useState } from "react";

type Props = {};
const Rating = ({}: Props) => {
  const [rating, setRating] = useState<number>(0);
  return (
    <div className="flex items-center gap-1">
      <div>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= rating ? "text-yellow-500" : "text-gray-300"}
              onClick={() => setRating(index)}
              onMouseOver={() => setRating(index)}
            >
              <span className="text-xs lg:text-base border-none bg-transparent outline-none">
                &#9733;
              </span>
            </button>
          );
        })}
      </div>
      <p className="text-xs lg:text-base">({rating})</p>
    </div>
  );
};
export default Rating;
