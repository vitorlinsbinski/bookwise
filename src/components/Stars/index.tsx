import { Star } from "phosphor-react";
import { v4 as uuidv4 } from "uuid";

interface StarsProps {
  amount: number;
}

export function Stars({ amount }: StarsProps) {
  const generateUniqueId = () => uuidv4();

  const filledStars = Array(amount)
    .fill(null)
    .map(() => <Star size={16} weight="fill" key={uuidv4()} />);

  const emptyStars = Array(5 - amount)
    .fill(null)
    .map(() => <Star size={16} key={uuidv4()} />);

  const allStars = filledStars.concat(emptyStars);

  return <>{allStars}</>;
}
