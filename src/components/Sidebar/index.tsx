import {
  Binoculars,
  ChartLineUp,
  ListDashes,
  SignIn,
  SignOut,
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

import logoImg from "../../../public/bookwise-complete-logo.svg";
import logoImgReduced from "../../../public/bookwise-logo.svg";
import { useRouter } from "next/router";
import { Avatar } from "../Avatar";
import { useState } from "react";
import Link from "next/link";

import profileImg from "../../../public/assets/avatarExample.png";

interface SidebarProps {
  isSignedIn: boolean;
}

export function Sidebar({ isSignedIn }: SidebarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const route = useRouter();

  function handleSidebarToggle() {
    setIsSidebarOpen((state) => !state);
  }

  return (
    <SidebarContainer isOpen={isSidebarOpen}>
      <SidebarToggle onClick={handleSidebarToggle} isOpen={isSidebarOpen}>
        <ListDashes size={24} />
      </SidebarToggle>

      <LogoContainer>
        <Image
          src={isSidebarOpen ? logoImg : logoImgReduced}
          alt=""
          width={128}
          height={32}
        />
      </LogoContainer>

      <Navbar>
        <NavList>
          <Link href={"/"}>
            <NavButton
              className={route.asPath == "/" ? "active" : ""}
              isOpen={isSidebarOpen}
            >
              <ChartLineUp size={24} />
              <span>Início</span>
            </NavButton>
          </Link>

          <Link href={"explorar"}>
            <NavButton
              className={route.asPath == "/explorar" ? "active" : ""}
              isOpen={isSidebarOpen}
            >
              <Binoculars size={24} /> <span>Explorar</span>
            </NavButton>
          </Link>

          {isSignedIn && (
            <Link href={"/perfil"}>
              <NavButton
                className={route.asPath == "/perfil" ? "active" : ""}
                isOpen={isSidebarOpen}
              >
                <User size={24} /> <span>Perfil</span>
              </NavButton>
            </Link>
          )}
        </NavList>
      </Navbar>

      {!isSignedIn ? (
        <LogInButton isOpen={isSidebarOpen}>
          <span>Fazer login</span> <SignIn size={20} />
        </LogInButton>
      ) : (
        <LogOutButton isOpen={isSidebarOpen}>
          <Avatar imgPath={profileImg.src} size={32} />
          <span>Cristofer</span> <SignOut size={20} />
        </LogOutButton>
      )}
    </SidebarContainer>
  );
}
