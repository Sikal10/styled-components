import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: ${({theme}) => theme.colors.footer};
  padding: 90px 0;,
`;

export const HorizontalLine = styled.p`
  width: 100%;
  height: 2px;
  background: rgba(128, 128, 128, 0.33);
  display: none;

  @media (max-width: ${({theme}) => theme.breakPoints.mobile}) {
    display: block;
  }
`;

export const FooterContainer = styled.div`
  width: 1000px;
  max-width: 100%;
  margin: 0 auto;
  color: #fff;
  
  h5 {
    text-align: center;
    margin-top: 40px;
    opacity: 0.6;
    letter-spacing: 1px;
    font-weight: 400;
  }

  @media (max-width: ${({theme}) => theme.breakPoints.mobile}) {
    width: 90%;
    margin: 0 auto;
  }

`;

export const Image = styled.img`
  width: 250px;
  margin-bottom: 35px;

  @media (max-width: ${({theme}) => theme.breakPoints.mobile}) {
   width: 150px;
  }
`;

export const ColumnOne = styled.div`
    p {
      margin-bottom: 16px;
      font-size: 16px;
    }

  @media (max-width: ${({theme}) => theme.breakPoints.mobile}) {
    p {
      font-size: 14px;
      text-align: left;
    }
  }
`;

export const ColumnTwo = styled.div`
    align-self: end;

  @media (max-width: ${({theme}) => theme.breakPoints.mobile}) {
   align-self: flex-start;
    text-align: left;
    font-size: 14px;
  }
`;

export const ColumnThree = styled.div`
  align-self: end;

  @media (max-width: ${({theme}) => theme.breakPoints.mobile}) {
    align-self: flex-start;
    text-align: left;
    font-size: 14px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  align-self: end;
  cursor: pointer;

  div {
    height: 40px;
    width: 40px;
    display: grid;
    place-items: center;
    border-radius: 100%;
    border: 1px solid lightgray;
    
    svg {
      height: 40px;
      color: lightgray;
    }
  }
`;