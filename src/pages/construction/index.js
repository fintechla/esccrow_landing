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
} from "./styles";
import LogoTwitter from "../../assets/images/logo-twitter.svg";
import LogoTelegram from "../../assets/images/logo-telegram.svg";
import LogoLinkedin from "../../assets/images/logo-linkedIn.svg";
import LogoDiscord from "../../assets/images/logo-discord.svg";
import ImgConstructionDark from "../../assets/images/construction-dark.svg";
import ImgConstructionResponsiveDark from "../../assets/images/construction-dark-responsive.svg";
import Timer from "../../components/timer";

function Construction() {
  return (
    <Layout>
      <ContainerConstruction>
        <ContainerImg>
          {/* <img src={ImgConstructionDark} style={{ width: "100%" }} /> */}

          <ImgConstruction
            src={ImgConstructionDark} // corregir
            alt=""
          />
          <DivContents>
            <span>Our website is under construction</span>
            <Timer />
            <ImgConstructionResponsive
              src={ImgConstructionResponsiveDark} // corregir
              alt=""
            />
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
