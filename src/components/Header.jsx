// import React from 'react'
import styled from 'styled-components';
import logo from "./../assets/images/logo.webp"
import { Link } from 'react-router-dom';

// Headerコンポーネントの外でStyled Componentsを定義する
const StyledHeader = styled.div`
    height: var(--HeaderHeight);
    background-color: var(--MRbrown);
`;

const StyledLogo = styled.img`
    background-color: var(--MRorange);
    padding: 10px;
    height: var(--HeaderHeight);
`;

const Header = () => {
    return (
        <StyledHeader>
            <Link to='/'>
                <StyledLogo src={logo} />
            </Link>
        </StyledHeader>
    );
}

export default Header;
