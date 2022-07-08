import React from "react";
import { ContainerFooter, TermsDiv, CopyrightDiv } from "./styles";

function Footer() {
  return (
    <ContainerFooter>
      <div>
        <CopyrightDiv>
          <a
            href="https://fintechlab.la/decentralized-escrow-service-what-is-it-and-how-does-it-work/"
            target="_blank"
          >
            © 2022 FintechLab US, LLC
          </a>
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
