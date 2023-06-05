import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
`;

export const Sidebar = styled.aside`
    color: #ffffff;
    width: 38%;
    height: 100vh;
    background-color: #000000;
`;

export const SidebarContainer = styled.div`
    width: 585px;
    margin-top: 56px;
    margin-left: auto;
    margin-right: 0;
`

export const SidebarTitle = styled.h1`
    margin-top: 180px;
    font-family: 'Mulish', sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 51px;
    letter-spacing: -0.02em;
    position: relative;
    &:after {
        content: url(./images/doodle.svg);
        position: absolute;
        top: -60px;
        right: 88px;
    }
`

export const Testimonial = styled.div`
    background: #262626;
    aspect-ratio: 16/10;
    border-radius: 16px;
    margin-top: 70px;
    margin-right: 24px;
`

export const LoginContent = styled.main`
    color: #000000;
    width: 62%;
    height: 100vh;
    background-color: #FFFFFF;
`;