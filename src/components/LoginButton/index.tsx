import { Icon } from "@iconify/react";

import { Button } from "./styles";
import { RocketLaunch } from "phosphor-react";
import { signIn } from "next-auth/react";

type LoginType = "google" | "github" | "guest";

interface ButtonProps {
  text: string;
  loginType: LoginType;
}

export function LoginButton({ text, loginType }: ButtonProps) {
  let iconComponent;

  switch (loginType) {
    case "google":
      iconComponent = <Icon icon="flat-color-icons:google" />;
      break;
    case "github":
      iconComponent = <Icon icon="mdi:github" color="white" />;
      break;
    case "guest":
      iconComponent = <RocketLaunch />;
      break;
    default:
      break;
  }

  function handleSignIn(loginType: LoginType) {
    if (loginType !== "guest") {
      signIn(loginType);
    }
  }

  return (
    <Button onClick={() => handleSignIn(loginType)}>
      {iconComponent} <span>{text}</span>
    </Button>
  );
}
