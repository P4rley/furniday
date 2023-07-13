"use client";

import Rating from "@/components/Rating";
import { useState } from "react";

type Props = {
  params: {
    categoryId: string;
  };
};
const DetailPage = ({ params: { categoryId } }: Props) => {
  const [rating, setRating] = useState<number>(0);
  return (
    <div>
      <div className="">
        <Rating />
      </div>
    </div>
  );
};
export default DetailPage;
