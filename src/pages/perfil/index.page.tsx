import { ReactElement } from "react";
import { ProfileContainer } from "./styles";
import DefaultLayout from "@/components/DefaultLayout";
import { Header } from "@/components/Header";

export default function Profile() {
  <ProfileContainer>
    <Header route="perfil" title="Perfil"></Header>
  </ProfileContainer>;
}

Profile.getLayout = function (page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
