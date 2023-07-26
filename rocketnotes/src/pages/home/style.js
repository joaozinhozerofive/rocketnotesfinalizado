import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`

width: 100%;
height: 100vh;

display: grid;

grid-template-columns: 250px auto;

grid-template-rows: 105px 128px auto 64px;

grid-template-areas: 
"brand header"
"menu search"
"menu content"
"newnote content";


background-color: ${({theme})=> theme.COLORS.BACKGROUND_800};
`
export const Brand=styled.div`

grid-area: brand;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};


display: flex;
justify-content: center;
align-items: center;

border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
color: ${({ theme }) => theme.COLORS.ORANGE};

`

export const Menu =styled.ul`
display: flex;
flex-direction: column;
align-items: center;

padding-top: 64px;
gap: 24px;

grid-area: menu;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

`

export const Search =styled.div`

grid-area: search;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

padding: 64px  64px 0;

`

export const Content =styled.div`

grid-area: content;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};


padding:0  64px ;

overflow-y: auto;

`

export const NewNote = styled(Link)`

grid-area: newnote;
background-color: ${({ theme }) => theme.COLORS.ORANGE};

color: ${({ theme }) => theme.COLORS.BACKGROUND_900};



display: flex;
gap: 7px;
flex-direction: row;
align-items: center;
justify-content: center;

`
