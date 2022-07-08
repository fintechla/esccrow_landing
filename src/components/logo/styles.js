import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../../assets/images/esccrow-logo.svg";

export const LogoImg = styled(LogoSVG)`
  margin-right: 15px;
`;

export const Span = styled.span`
  font-family: LTWave;
  font-size: 2.5rem;
  line-height: 40px;
  margin-top: -6px;
  color: ${({ theme }) => theme.fontColor};
  letter-spacing: -1px;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
`;
