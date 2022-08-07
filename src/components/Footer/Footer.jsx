import Logo from "../../assets/images/logo_white.svg";
import {FaRedditAlien, FaTwitter, FaGitlab} from "react-icons/fa";
import {
    ColumnOne,
    ColumnThree,
    ColumnTwo,
    FooterContainer,
    HorizontalLine,
    Image,
    SocialIcons,
    StyledFooter
} from "./footerStyle";
import {Flex} from "../../styles";

const Footer = () => {
    return (
        <StyledFooter>
            <FooterContainer>
                <Image src={Logo} alt=""/>

                <Flex gap={"40px"}>
                    <ColumnOne>
                        <p>Bridging the gap between individuals who need liquid cash and
                            businesses who need discounted gift cards as a payment alternative.
                        </p>

                        <p>+234 (0) 706 050 2770</p>

                        <p>example@huddle.com</p>
                    </ColumnOne>

                    <HorizontalLine/>

                    <ColumnTwo>
                        <p>About Us</p>
                        <p>What We Do</p>
                        <p>FAQ</p>
                    </ColumnTwo>

                    <HorizontalLine/>

                    <ColumnThree>
                        <p>Career</p>
                        <p>Blog</p>
                        <p>Contact Us</p>
                    </ColumnThree>

                    <HorizontalLine/>

                    <SocialIcons>
                        <div><FaRedditAlien /></div>
                        <div><FaGitlab /></div>
                        <div><FaTwitter /></div>
                    </SocialIcons>

                    <HorizontalLine />
                </Flex>

                <h5>&copy; 2022 Huddle. All rights reserved</h5>
            </FooterContainer>
        </StyledFooter>
    );
};

export default Footer;