import {
  Binoculars,
  ChartLineUp,
  ListDashes,
  SignIn,
  SignOut,
  TextIndent,
  TextOutdent,
  User,
} from "phosphor-react";
import {
  LogInButton,
  LogOutButton,
  LogoContainer,
  NavButton,
  NavItem,
  NavList,
  Navbar,
  SidebarContainer,
  SidebarToggle,
} from "./styles";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";

import logoImg from "../../../public/bookwise-complete-logo.svg";
import logoImgReduced from "../../../public/bookwise-logo.svg";
import { useRouter } from "next/router";
import { Avatar } from "../Avatar";
import { useState } from "react";
import Link from "next/link";

import profileImg from "../../../public/assets/avatarExample.png";
import { LoginModal } from "../LogInModal";
import { signOut, useSession } from "next-auth/react";
import { LogOutModal } from "../LogOutModal";

interface SidebarProps {
  isSignedIn: boolean;
}

export function Sidebar({ isSignedIn }: SidebarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const route = useRouter();

  const session = useSession();

  function handleSidebarToggle() {
    setIsSidebarOpen((state) => !state);
  }

  return (
    <SidebarContainer isOpen={isSidebarOpen}>
      <SidebarToggle onClick={handleSidebarToggle} isOpen={isSidebarOpen}>
        {!isSidebarOpen ? <TextIndent size={24} /> : <TextOutdent size={24} />}
      </SidebarToggle>

      <Link href={"/"}>
        <LogoContainer>
          <Image
            src={isSidebarOpen ? logoImg : logoImgReduced}
            alt=""
            width={128}
            height={32}
          />
        </LogoContainer>
      </Link>

      <Navbar>
        <NavList>
          <Link href={"/"}>
            <NavButton
              className={route.asPath == "/" ? "active" : ""}
              isOpen={isSidebarOpen}>
              <ChartLineUp size={24} />
              <span>Início</span>
            </NavButton>
          </Link>

          <Link href={"explorar"}>
            <NavButton
              className={route.asPath == "/explorar" ? "active" : ""}
              isOpen={isSidebarOpen}>
              <Binoculars size={24} /> <span>Explorar</span>
            </NavButton>
          </Link>

          {isSignedIn && (
            <Link href={"/perfil"}>
              <NavButton
                className={route.asPath == "/perfil" ? "active" : ""}
                isOpen={isSidebarOpen}>
                <User size={24} /> <span>Perfil</span>
              </NavButton>
            </Link>
          )}
        </NavList>
      </Navbar>

      {!isSignedIn ? (
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <LogInButton isOpen={isSidebarOpen}>
              <span>Fazer login</span> <SignIn size={20} />
            </LogInButton>
          </Dialog.Trigger>

          <LoginModal />
        </Dialog.Root>
      ) : (
        <Dialog.Root>
          <LogOutButton isOpen={isSidebarOpen}>
            <Link href={"/perfil"}>
              <Avatar imgPath={session.data?.user?.avatar_url} size={32} />
            </Link>

            <Link href={"/perfil"}>
              <span>{session.data?.user?.name?.split(" ")[0]}</span>{" "}
            </Link>

            <Dialog.Trigger asChild>
              <SignOut size={20} />
            </Dialog.Trigger>
          </LogOutButton>

          <LogOutModal />
        </Dialog.Root>
      )}
    </SidebarContainer>
  );
}
