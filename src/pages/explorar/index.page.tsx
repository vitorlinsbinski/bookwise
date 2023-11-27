import { Header } from "@/components/Header";
import { ExploreContainer } from "./styles";
import { ReactElement } from "react";
import DefaultLayout from "@/components/DefaultLayout";

export default function Explore() {
  return (
    <ExploreContainer>
      <Header route="explorar" title="Explorar"></Header>
    </ExploreContainer>
  );
}

Explore.getLayout = function (page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
