import {StyledHeader, Nav, Logo, Image, HeaderContainer} from "./headerStyle";
import logo from "../../assets/images/logo.svg";
import Button from "../Button/Button";
import {Flex} from "../../styles";
import mockups from "../../assets/images/illustration-mockups.svg";

const Header = () => {
    return (
        <StyledHeader>
            <HeaderContainer>
                <Nav>
                    <Logo src={logo} alt={""} />
                    <Button text={"Try It Free"} />
                </Nav>

                <Flex>
                    <div>
                        <h1>Build The Community Your Fans Will Love</h1>

                        <p>
                            Huddle re-imagines the way we build communities. You have a voice,
                            but so does your audience. Create connections with your users as
                            you engage in genuine discussion.
                        </p>

                        <Button bg={'#ff0099'} color={'#fff'} text={"Get Started For Free"}/>
                    </div>

                    <Image src={mockups} alt={""} />
                </Flex>
            </HeaderContainer>
        </StyledHeader>
    );
};

export default Header;