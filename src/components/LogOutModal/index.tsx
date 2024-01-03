import * as Dialog from "@radix-ui/react-dialog";
import {
  Buttons,
  CancelButton,
  CloseButton,
  Content,
  LogOutButton,
  Overlay,
} from "./styles";
import { signOut } from "next-auth/react";

export function LogOutModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <CloseButton />

      <Content>
        <Dialog.Title>Tem certeza que deseja sair?</Dialog.Title>

        <Buttons>
          <Dialog.Close>
            <CancelButton>Cancelar</CancelButton>
          </Dialog.Close>

          <LogOutButton onClick={async () => await signOut()}>
            Sair
          </LogOutButton>
        </Buttons>
      </Content>
    </Dialog.Portal>
  );
}
