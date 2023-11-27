import { Binoculars, ChartLineUp, User } from "phosphor-react";
import { HeaderContainer, Title } from "./styles";
import { ReactNode } from "react";

type Route = "home" | "explorar" | "perfil";

interface HeaderProps {
  title: string;
  route: Route;
  children?: ReactNode;
}

const icon = {
  home: <ChartLineUp size={32} />,
  explorar: <Binoculars size={32} />,
  perfil: <User size={32} />,
};

export function Header({ title, route, children }: HeaderProps) {
  return (
    <HeaderContainer>
      <Title>
        {icon[route]}
        <h1>{title}</h1>
      </Title>

      {children}
    </HeaderContainer>
  );
}
