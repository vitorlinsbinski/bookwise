import { Star, StarHalf } from "phosphor-react";
import { v4 as uuidv4 } from "uuid";

interface StarsProps {
  amount: number;
}

export function Stars({ amount }: StarsProps) {
  const filledStarsCount = Math.floor(amount);

  const filledStars = Array(filledStarsCount)
    .fill(null)
    .map(() => <Star size={16} weight="fill" key={uuidv4()} />);

  const hasHalfStar = amount - filledStarsCount >= 0.5;

  const halfStar = hasHalfStar ? (
    <StarHalf size={16} weight="fill" key={uuidv4()} />
  ) : null;

  const emptyStarsCount = 5 - filledStarsCount - (hasHalfStar ? 1 : 0);

  const emptyStars = Array(emptyStarsCount)
    .fill(null)
    .map(() => <Star size={16} key={uuidv4()} />);

  let allStars = filledStars;

  if (halfStar) {
    allStars = filledStars.concat(halfStar, emptyStars);
  } else {
    allStars = filledStars.concat(emptyStars);
  }

  return <>{allStars}</>;
}
