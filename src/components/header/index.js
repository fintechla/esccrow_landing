import React from "react";
import { ContainerHeader,ActionDiv ,AUi} from "./styles";
import Logo from "../logo";

function Header() {
  return (
    <ContainerHeader>
      <nav>
        <Logo />
        <ActionDiv>
          <AUi href="https://app.testnet.esccrow.finance/">Go to App</AUi>
        </ActionDiv>
      </nav>
    </ContainerHeader>
  );
}

export default Header;
