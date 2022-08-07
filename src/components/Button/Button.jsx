import React from 'react';
import {StyledButton} from "./buttonStyle";

const Button = ({text, bg, color}) => {
    return (
        <StyledButton bg={bg} color={color}>
            {text}
        </StyledButton>
    );
};

export default Button;