import styled from "styled-components";

export const ContainerTimer = styled.div`
  display: flex;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div:last-child {
    display: none;
  }

  span {
    font-family: "SuiseIntl";
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 50px;
    margin: 0 20px 0 0;
  }
  span:last-child {
    font-family: "SuiseIntl";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;

    color: #ffffff;
    width: 4em;
    text-align: center;
  }

  div:last-child > span {
    margin-right: 0px;
  }

  @media (min-width: 768px) {
    div:last-child {
      display: flex;
    }

    span{
        font-size: 34px;
    }

    span:last-child {
    font-size: 12px;
        
    }
}
`;
