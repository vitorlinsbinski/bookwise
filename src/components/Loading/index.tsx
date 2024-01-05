import Image from "next/image";
import { Loader, LoadingContainer, Overlay } from "./styles";

import bookLogo from "../../../public/bookwise-logo.svg";

export function Loading() {
  return (
    <LoadingContainer>
      <Overlay />

      <Loader />

      <Image src={bookLogo} alt="" />
    </LoadingContainer>
  );
}
