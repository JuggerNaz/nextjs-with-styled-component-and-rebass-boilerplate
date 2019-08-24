import React from 'react'
import styled from 'styled-components'
import { Flex, Box, Text, Heading } from 'rebass'

const Button = styled.a`
    padding: 15px 0px;
    width: 200px;
    font-size: 18px;
    border-radius: 5px;
    background: #480E87;
    text-align: center;
    margin: 30px 0px;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);            
`

const CtaButton = props =>
    <Button {...props} />

export default CtaButton