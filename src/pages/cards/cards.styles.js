import styled from "styled-components";

export const CardsContainer = styled.div`
    width: 1440px;
    margin: auto;
    display: block;
`;

export const HeaderPage = styled.div`
    display: flex;
    justify-content: space-between;
    width: calc(100% - 260px);
    padding: 56px 130px;
`;

export const HeaderTitle = styled.h1`
    font-size: 32px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.32px;
`;

export const HeaderActions = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
`

export const MenuButton = styled.button`
    width: 32px;
    height: 32px;
    padding: 0;
    border-radius: 50%;
    background: #E9E9E9;
    margin-left: 16px;
`

export const GridButton = styled.button`
    width: 32px;
    height: 32px;
    padding: 0;
    border-radius: 50%;
    background: #000000;  
`

export const ButtonImg = styled.img`
    margin-top: 4px;
`

export const SearchCards = styled.input`
    width: 295px;
    height: 20px;
    padding: 16px 16px 16px 32px;
    border: none;
    border-bottom: 1px solid #000000;
    background-color: transparent;
    color: #989898;
    font-size: 16px;
    font-family: "Mulish", sans-serif;
    font-weight: 400;
    line-height: 150%;
    background-image: url(images/icons/search.svg);
    background-repeat: no-repeat;
    background-position: center left;
`
