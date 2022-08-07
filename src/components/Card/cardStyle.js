import styled from "styled-components";

export const StyledCard = styled.div`
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  display: flex;
  gap: 50px;
  align-items: center;
  background: #FFF;
  flex-direction: ${({layout}) => layout || "row"};

  @media (max-width: ${({theme}) => theme.breakPoints.mobile}) {
    flex-direction: column;
    padding: 60px 35px;
    
    h1 {
      font-size: 22px;
      margin-bottom: 20px;
    }
    
    p {
      font-size: 15px;
    }
  }
  
  & > div {
    flex: 1;
    
    h1 {
      margin-bottom: 10px;
    }
  }
`;

export const Image = styled.img`
  width: 350px;
`;