import React from "react";
import Layout from "../layout";
import {
  ContainerConstruction,
  ContainerImg,
  ImgConstruction,
  ImgConstructionResponsive,
  DivContents,
  IconA,
  ContainerLinks,
  TitleDiv,
} from "./styles";
import LogoTwitter from "../../assets/images/logo-twitter.svg";
import LogoTelegram from "../../assets/images/logo-telegram.svg";
import LogoLinkedin from "../../assets/images/logo-linkedIn.svg";
import LogoDiscord from "../../assets/images/logo-discord.svg";
import ImgConstructionDark from "../../assets/images/construction-dark.svg";
import ImgConstructionLight from "../../assets/images/construction-light.svg";
import ImgConstructionResponsiveGeneral from "../../assets/images/construction-dark-responsive.svg";
import Timer from "../../components/timer";

function Construction({ theme, onChangeTheme }) {
  return (
    <Layout theme={theme} onChangeTheme={onChangeTheme}>
      <ContainerConstruction>
        <ContainerImg>
          <ImgConstruction
            src={theme ? ImgConstructionLight : ImgConstructionDark}
          />
          <DivContents>
            <TitleDiv>
              <span>Our website is </span>
              <span>coming soon in</span>
            </TitleDiv>
            <Timer />
            <ImgConstructionResponsive src={ImgConstructionResponsiveGeneral} />
            <ContainerLinks>
              <IconA href="https://twitter.com/esccrow" target="_blank">
                <img src={LogoTwitter} alt="" />
              </IconA>
              <IconA href="https://t.me/fintechlablatam" target="_blank">
                <img src={LogoTelegram} alt="" />
              </IconA>
              <IconA
                href="https://www.linkedin.com/company/fintechlatam/"
                target="_blank"
              >
                <img src={LogoLinkedin} alt="" />
              </IconA>
              <IconA href="https://discord.gg/AmxN8NS5zr" target="_blank">
                <img src={LogoDiscord} alt="" />
              </IconA>
            </ContainerLinks>
          </DivContents>
        </ContainerImg>
      </ContainerConstruction>
    </Layout>
  );
}

export default Construction;
