import React from "react";
import { ContainerFooter, TermsDiv, CopyrightDiv } from "./styles";

function Footer() {
  return (
    <ContainerFooter>
      <div>
        <CopyrightDiv>
          <span>© 2022 FintechLab US, LLC</span>
        </CopyrightDiv>

        <TermsDiv>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </TermsDiv>
      </div>
    </ContainerFooter>
  );
}

export default Footer;
