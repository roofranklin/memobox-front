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
export const LoginContent = styled.main`
    color: #000000;
    width: 62%;
    height: 100vh;
    background-color: #FFFFFF;
    background-image: url(./images/login-bg.svg);
    background-position: right bottom;
    background-repeat: no-repeat;
`;

export const LoginBox = styled.div`
    width: 500px;
    min-height: 500px;
    margin-left: 225px;
    margin-top: 225px;
`

export const LoginTitle = styled.h1`
    margin-top: 50px;
    text-align: center;
    font-weight: 700;
    font-family: 'Playfair Display', serif;
    font-size: 48px;
    line-height: 64px;
    letter-spacing: -0.01em;
`

export const LoginSubtitle = styled.p`
    margin-top: 24px;
    text-align: center;
    font-family: 'Mulish', sans-serif;
    font-size: 16px;
    line-height: 150%;
`

export const FormBox = styled.form`
    padding-top: 20px;
`

export const FormItem = styled.div`
    padding-top: 32px;
`

export const FormLabel = styled.label`
    font-family: 'Mulish', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`

export const FormInput = styled.input`
    display: block;
    width: calc(100% - 15px);
    margin-top:8px;
    border: none;
    padding-left:15px;
    height: 48px;
    font-family: 'Mulish', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    border-radius: 8px;
    background-color: #f4f4f4;
`

export const Link = styled.a`
    display: block;
    margin: auto;
    text-align: center;
    margin-top: 32px;
    font-weight: 700;
    color: #000000;
    text-decoration: underline;
`

export const FormButton = styled.button`
    display: block;
    margin: auto;
    margin-top: 32px;
    width: 158px;
    height: 44px;
    background-color: #000000;
    color: #FFFFFF;
    border-radius: 22px;
    font-family: 'Mulish', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`