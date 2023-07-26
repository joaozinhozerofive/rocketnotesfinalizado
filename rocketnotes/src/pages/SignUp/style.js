import styled from "styled-components"
import backgroundImg from "../../assets/background.png"


export const Container = styled.div`

    height: 100vh;

    display: flex;

    align-items: stretch;

`


export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    margin-bottom: 24px;

    > h1{
        color: ${({theme})=> theme.COLORS.ORANGE};
    }

    >p{
        color: ${({theme})=> theme.COLORS.GRAY_100};
        margin-bottom: 48px;
        font-size: 14px;
    }

    h2{
        font-weight: 500;
        font-size: 24px;
        margin-bottom: 48px;
    }

    a{
        color: ${({theme})=> theme.COLORS.ORANGE};
        margin-top: 124px;

    }


`


export const Background = styled.div`
    opacity: 0.8;
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`