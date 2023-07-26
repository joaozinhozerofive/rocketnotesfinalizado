import styled from "styled-components"

export const Container = styled.div`


    width: 100%;
    >header{
        width: 100%;
        height: 144px;


        background-color: ${({theme}) =>theme.COLORS.BACKGROUND_900};

        display: flex;
        align-items: center;

        padding: 0 120px;

        svg{
            color: ${({theme}) =>theme.COLORS.GRAY_100};
            width: 24px;
            height: 24px;
        }

        button{
            background-color: transparent;
        }
    }
` 


export const Form = styled.form`
    max-width: 340px;
    margin: 30px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    >div:nth-child(4){
        margin-top: 24px;
    }
`


export const Avatar = styled.div`

        position: relative;

        >img{
            border-radius: 50%;

            width: 186px;
            height: 186px;
            display: flex;

            margin-top: -124px;
            margin-bottom: 64px;
        }
         >label{
            width: 48px;
            height: 48px;
            background-color: ${({theme}) =>theme.COLORS.ORANGE};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

            position: absolute;
            bottom: 78px;
            right: 7px;
            cursor: pointer;

            input{
                display: none;
            }
            

            svg{
                width: 20px;
                height: 20px;
            }
         }
        
`