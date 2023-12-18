import { ReactNode } from "react";
import { Sidebar } from "../Sidebar";
import { LayoutContainer } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <Sidebar isSignedIn={true} />
      {children}
    </LayoutContainer>
  );
}
