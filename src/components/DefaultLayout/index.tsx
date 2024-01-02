import { ReactNode } from "react";
import { Sidebar } from "../Sidebar";
import { LayoutContainer } from "./styles";
import { useSession } from "next-auth/react";

interface LayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: LayoutProps) {
  const session = useSession();

  const isSignedIn = session.status === "authenticated";

  return (
    <LayoutContainer>
      <Sidebar isSignedIn={isSignedIn} />
      {children}
    </LayoutContainer>
  );
}
