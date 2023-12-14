import Image from "next/image";
import { AvatarContainer } from "./style";
import avatarImg from "../../../public/assets/avatar-example.png";

interface AvatarProps {
  imgPath?: string;
  size: number;
}

export function Avatar({ imgPath = "", size }: AvatarProps) {
  return (
    <AvatarContainer css={{ "--size": `${size / 16}rem` }}>
      <Image src={imgPath} alt="" width={size} height={size} />
    </AvatarContainer>
  );
}
