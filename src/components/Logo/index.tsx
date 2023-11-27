import Image from "next/image";
import logoImg from "../../../public/bookwise-logo.svg";
import { LogoContainer, Wordmark } from "./styles";

export function Logo() {
  return (
    <LogoContainer>
      <Image src={logoImg} alt="" />
      <Wordmark>BookWise</Wordmark>
    </LogoContainer>
  );
}
