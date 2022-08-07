import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 40px 0;
  background: ${({theme}) => theme.colors.header};
  width: 100%;

  @media (max-width: ${({theme}) => theme.breakPoints.mobile}) {
   h1 {
     font-size: 25px;
   }
    
    p {
      font-size: 16px;
    }
  }
  
`;

export const HeaderContainer = styled.div`
  width: 1000px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  
  @media (max-width: ${({theme}) => theme.breakPoints.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({theme}) => theme.breakPoints.mobile}) {
    margin-bottom: 40px;
  }
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px ;

  @media (max-width: ${({theme}) => theme.breakPoints.mobile}) {
    margin: 40px 0 30px;
  }

`;
