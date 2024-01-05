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
import { getSession, useSession } from "next-auth/react";
import Link from "next/link";

import { GetServerSideProps } from "next";
import { authOptions } from "../api/auth/[...nextauth].api";
import { getServerSession } from "next-auth";
import { NextSeo } from "next-seo";

export default function Login() {
  return (
    <>
      <NextSeo
        title="Login - Bookwise"
        description="Faça seu login no Bookwise e começe agora a avaliar seus livros favoritos"
      />

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
              <Link href={"/"}>
                <LoginButton loginType="guest" text="Acessar como visitante" />
              </Link>
            </ButtonsContainer>
          </LoginArea>
        </LoginContainer>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  try {
    const session = await getServerSession(
      context.req,
      context.res,
      authOptions
    );

    if (session) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  } catch (error) {
    console.log("An error occurred trying to fetch session data: ", error);

    // Handle the error gracefully and return a fallback response.
    return {
      props: {},
    };
  }
};
