import {
  ButtonsContainer,
  Hero,
  LoginArea,
  LoginContainer,
  LogoContainer,
} from "./styles";
import { LoginButton } from "@/components/LoginButton";
import Image from "next/image";

import logoImg from "../../../public/bookwise-complete-logo.svg";

export default function Login() {
  return (
    <div>
      <LoginContainer>
        <Hero>
          <LogoContainer>
            <Image src={logoImg} alt="" width={232} height={419} />
          </LogoContainer>
        </Hero>

        <LoginArea>
          <h2>Boas vindas!</h2>
          <p>Faça seu login ou acesse como visitante.</p>

          <ButtonsContainer>
            <LoginButton loginType="google" text="Entrar com Google" />
            <LoginButton loginType="github" text="Entrar com GitHub" />
            <LoginButton loginType="guest" text="Acessar como visitante" />
          </ButtonsContainer>
        </LoginArea>
      </LoginContainer>
    </div>
  );
}
