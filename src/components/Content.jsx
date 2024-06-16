// import React from 'react'
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const fonts = `
    font-family: "Zen Kaku Gothic New", sans-serif;
    font-style: normal;
`;

const Wrapper = styled.div`
    text-align: center;
    padding-top: 15vh;
`;

const PackTitle = styled.div`
    ${fonts}
    font-weight: 600;
    font-size: 3rem;
`;

const PackDescription = styled.div`
    ${fonts}
    font-weight: 500;
    font-size: 1.2rem;
    word-break: keep-all;
    /* font-size: 20px; */
`;

const PackDownload = styled.div`
    position: absolute;
    ${fonts}
    font-weight: 500;
    font-size: 1.2rem;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: 5vh;
    max-width: 500px;
    width: 100%;
    height: 5em;
    padding-inline: 10px;
`;

const Content = ({ item }) => {

    const navigate = useNavigate();

    const BackGroundImage = styled.div`
        background-image: url(${item.topBackImage});
        height: 100vh;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
    `;

    return (
        <BackGroundImage>
            <Wrapper>
                <PackTitle className='h1'>{item.packTitle}</PackTitle>
                <PackDescription>{item.packDescription}</PackDescription>
                <PackDownload>
                    <Button
                        variant="dark"
                        style={{ width: "100%", height: "100%", }}
                        onClick={() => { navigate(`/${item.href}`) }}
                    >ダウンロードページ</Button>
                </PackDownload>
            </Wrapper>
        </BackGroundImage>
    )
}

export default Content;

Content.propTypes = {
    item: PropTypes.object.isRequired
}
