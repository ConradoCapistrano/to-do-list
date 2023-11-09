import styled from "styled-components";

export const Container = styled.div `
    background-color: #17181F;
    color: #797A81;
    min-height: 100vh;
`;

export const Area = styled.div `
    margin: auto;
    max-width: 90%;
    padding: 2%;
`;

export const Header = styled.h1 `
    margin: 0;
    padding: 0;
    color: #fff;
    text-align: center;
    border-bottom: 1px solid #444;
    padding-bottom: 20px;

    font-size: 4vw;
    min-font-size: 20px;

    @media (max-width: 768px) {
        font-size: 5vw;
      }
    @media (max-width: 480px) {
    font-size: 6vw;
    }
    @media (max-width: 320px) {
    font-size: 7vw;
    }

`;