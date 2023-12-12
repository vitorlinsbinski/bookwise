import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, LoginButtons, Overlay } from "./styles";
import { LoginButton } from "../LoginButton";
import { X } from "phosphor-react";

export function LoginModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <Dialog.Title asChild>
          <h3>Faça login para deixar sua avaliação</h3>
        </Dialog.Title>

        <LoginButtons>
          <LoginButton loginType="google" text="Entrar com Google" />

          <LoginButton loginType="github" text="Entrar com Github" />
        </LoginButtons>
      </Content>
    </Dialog.Portal>
  );
}
