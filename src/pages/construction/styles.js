import styled from "styled-components";

export const ContainerConstruction = styled.div`
  height: calc(100vh - 56px);
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 100px 50px 0;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 720px;
    padding: 0;
  }
  @media (min-width: 992px) {
    width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
  @media (min-width: 1600px) {
    width: 1440px;
  }
`;

export const ContainerImg = styled.div`
  position: relative;
  margin: 0 auto;
  @media (min-width: 768px) {
    margin: 0 100px;
  }
  @media (min-width: 992px) {
    margin: 0 220px;
  }
  @media (min-width: 1200px) {
    margin: 0 300px;
  }
  @media (min-width: 1600px) {
    margin: 0 400px;
  }
`;

export const ImgConstruction = styled.img`
  width: 100%;
  margin: auto;
  align-self: center;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
export const ImgConstructionResponsive = styled.img`
  margin: 40px 0;
  width: 80%;
  /* margin: auto; */
  align-self: center;
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const DivImg = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  align-self: center;

  span {
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    color: #1a237e;
  }
`;
export const DivContents = styled.div`
  width: 100%;
  margin: auto;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-family: SuiseIntl;
    font-style: normal;
    font-weight: 600;
    font-size: 31px;
    line-height: 32px;
    margin-bottom: 20px;
    color: #ffffff;
    text-align: center;
  }

  @media (min-width: 768px) {
    font-size: 21px;
    position: absolute;
    top: 40%;

    span {
      font-size: 18px;
    }
  }
  @media (min-width: 1600px){
    span {
      margin-bottom: 50px;
    }
  }
`;

export const IconA = styled.a`
  display: block;
  width: 50px;
  height: 50px;

  img {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const ContainerLinks = styled.div`
  margin-top: 40px;
  display: flex;
  width: 100%;
  justify-content: space-around;

  @media (min-width: 768px) {
    margin-top: 50px;
    width: 35%;
    justify-content: space-between;
  }
  
  @media (min-width: 1600px){
    margin-top: 60px;
  }
`;
