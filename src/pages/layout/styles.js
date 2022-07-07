import styled from "styled-components";

export const ContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.background};
`;
