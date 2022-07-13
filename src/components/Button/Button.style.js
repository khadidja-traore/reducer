import styled from "styled-components";

export const RedButton = styled.button `
width: 200px; 
height: 50px;
background-color: red;
`
export const GreenButton = styled.button `
width: 200px; 
height: 50px;
background-color: green;
`
export const BlueButton = styled.button `
width: 200px; 
height: 50px;
background-color: blue;
`
export const Button = styled.button `
width: 200px; 
height: 50px;
background-color: ${ (props) => props.backgroundcolor};
&:hover{
        background-color: ${ (props) => props.backgroundHovercolor};
    }

&:active{
    background-color: yellowgreen;
}
`

export const ButtonLabel = styled.label`
    font-size: 15px;
    color: orange;
`