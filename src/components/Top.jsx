// import React from 'react'
import styled from 'styled-components';
import TopImage from "./../assets/images/top_3.webp"



const StyledTopImage = styled.div`
    height: calc(100vh - var(--HeaderHeight));
    width: 100%;
    background-image: url(${TopImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
`;

const TopText = styled.div`
    color: #fff;
    position: absolute;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
    font-size: 10vw;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 0.9em;
    backdrop-filter: blur(5px);
    padding: 10px;
    border-radius: 10px;


    //メディアクエリ
    @media screen and (max-width: 1000px) {
        font-size: 15vw;
    }
`;

const Top = () => {
    return (
        <>
            <StyledTopImage >
                <TopText>
                    <div>Musashino</div>
                    <div>Railway</div>
                </TopText>
            </StyledTopImage>
        </ >
    )
}

export default Top
