import styled from 'styled-components'
import { Button as ButtonBase } from 'rebass'

const StyledButton = styled(ButtonBase)`
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    letter-spacing: 0.5px;
    font-weight: 700;
    font-family: 'Nunito', sans-serif;
`

const Button = props =>
    <StyledButton
        ml = { 2}
        bg = '#480E87'
    >{ props.children }</StyledButton>

export default Button