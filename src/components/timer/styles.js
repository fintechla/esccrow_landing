import styled from "styled-components";

export const ContainerTimer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;

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
    font-size: 36px;
    line-height: 30px;
    /* margin: 0 20px 0 0; */
    margin-bottom: 0px;
  }
  span:last-child {
    font-family: "SuiseIntl";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;

    color: ${({ theme }) => theme.fontColor};
    width: 4em;
    text-align: center;
  }

  div:last-child > span {
    margin-right: 0px;
  }

  @media (min-width: 768px) {
    gap: 25px;

    div:last-child {
      display: flex;
    }

    span {
      font-size: 34px;
    }

    span:last-child {
      font-size: 12px;
    }
  }
`;
