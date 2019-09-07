import styled from 'styled-components'
import { Flex } from 'rebass'

const StyledRoundButton = styled(Flex)`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #480E87;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    color: #fff;
`

const RoundButton = props =>
    <StyledRoundButton
        alignItems='center'
        justifyContent='center'
    >
        {props.children}
    </StyledRoundButton>

export default RoundButton