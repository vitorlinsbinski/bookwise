import { Star } from "phosphor-react";
import { v4 as uuidv4 } from "uuid";

interface StarsProps {
  amount: number;
}

export function Stars({ amount }: StarsProps) {
  const generateUniqueId = () => uuidv4();

  const filledStars = Array(amount).fill(
    <Star size={16} weight="fill" key={generateUniqueId()} />
  );

  const emptyStars = Array(5 - amount).fill(
    <Star size={16} key={generateUniqueId()} />
  );

  const allStars = filledStars.concat(emptyStars);

  return <>{allStars}</>;
}
