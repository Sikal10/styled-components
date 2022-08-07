import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: ${({gap}) => gap};

  @media (max-width: ${({theme}) => theme.breakPoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
  
  & > div {
    flex: 1;
  }
  
  h1 {
    margin-bottom: 10px;
  }
  
  p {
    margin-bottom: 10px;
  }
`;

export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;