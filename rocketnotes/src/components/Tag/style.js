import styled from 'styled-components'

export const Container = styled.span`

font-size: 12px;
padding: 5px 14px;
border-radius: 5px;
margin: 6px;
margin-top: 6px;
color: ${({theme})=> theme.COLORS.BACKGROUND_900};
background-color: ${({theme})=> theme.COLORS.ORANGE};
`
