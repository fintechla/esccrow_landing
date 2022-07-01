import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100%;
  height: 98px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 25px;
  }

  @media (min-width: 768px) {
    border-bottom: 0.5px solid rgba(131, 131, 131, 0.5);;

    nav {
      width: 720px;
    }
  }
  @media (min-width: 992px) {
    nav {
      width: 960px;
    }
  }
  @media (min-width: 1200px) {
    nav {
      width: 1140px;
    }
  }
  @media (min-width: 1600px) {
    nav {
      width: 1440px;
    }
  }
`;

export const ActionDiv = styled.div`
  display: flex;
`
export const AUi = styled.a`
  /* border: 1px solid red; */
  height: 34px;
  display: flex;
  border-radius: 10px;
  background: #0086ff;
  padding: 0 20px;
  align-items: center;
  color: white;
  text-decoration: none;
`
