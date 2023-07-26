import styled from "styled-components";

export const Container = styled.div`

width: 100%;
height: 100%;

display: grid;

grid-template-rows: 105px auto;

grid-template-areas: 

"header"
"content";

>main{ 
   grid-area: content;
   overflow-y: scroll;
   padding: 64px 0;
}
;
`



export const Links = styled.ul`

list-style: none;


li {
    margin-top: 12px;
 }

a{
    color: ${({theme})=> theme.COLORS.WHITE};
 }
`


export const Content = styled.div`


display: flex;
flex-direction: column;

max-width: 550px;
margin: 0 auto;

> button:first-child{
   align-self: end;
}

> h1{
   margin-bottom: 16px;
   font-size: 36px;
   font-weight: 500;
   padding-top: 64px;
}

>p{
   text-align: justify;
}
`
