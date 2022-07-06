import styled from "styled-components";

export const ContainerFooter = styled.div`
  background-color: ${({ theme }) => theme.backgroundFooter};
  width: 100%;
  display: flex;
  color: #838383;
  justify-content: center;
  padding-bottom: 60px;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    border-top: 0.5px solid #838383;
    box-sizing: border-box;
    display: flex;
    height: 56px;
    padding-bottom: 0;

    > div {
      display: flex;
      flex-direction: row;
      width: 720px;
    }
  }
  @media (min-width: 992px) {
    > div {
      width: 960px;
    }
  }
  @media (min-width: 1200px) {
    > div {
      width: 1140px;
    }
  }
  @media (min-width: 1600px) {
    > div {
      width: 1440px;
    }
  }
`;

export const TermsDiv = styled.div`
  background: rgba(217, 217, 217, 0.16);
  width: 100%;
  justify-content: center;
  display: flex;
  height: 38px;
  align-items: center;
  span {
    padding: 0 20px;
  }
  span:first-child {
    border-right: 1px solid gray;
  }

  @media (min-width: 768px) {
    background: none;
    justify-content: end;
    font-size: 14px;
  }
`;
export const CopyrightDiv = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  height: 38px;
  align-items: center;

  @media (min-width: 768px) {
    background: none;
    justify-content: start;
    font-size: 14px;
  }
`;
