import React, { useEffect, useState } from "react";
import { ContainerHeader, ActionDiv, AUi, ButtonTheme } from "./styles";
import Logo from "../logo";
import { Moon, Sun } from "../icons";

function Header({ theme, onChangeTheme }) {
  return (
    <ContainerHeader>
      <nav>
        <Logo />
        <ActionDiv>
          <AUi href="https://app.esccrow.finance/">Go to App</AUi>
          <ButtonTheme onClick={() => onChangeTheme(!theme)}>
            {theme ? <Moon /> : <Sun />}
          </ButtonTheme>
        </ActionDiv>
      </nav>
    </ContainerHeader>
  );
}

export default Header;
