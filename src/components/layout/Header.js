import React from 'react'
import { Flex, Box, Heading, Text } from 'rebass'
import styled from 'styled-components'
import * as faRegular from 'styled-icons/fa-regular/'

//local
import Container from './Container'
import Navbar from '../core/Navbar'

const CustomContainer = styled(Container)`
    background: rgb(134,37,205);
    background: linear-gradient(45deg, rgba(134,37,205,1) 0%, rgba(200,49,216,1) 100%);
`

const CTAButton = styled.a`
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
const Handshake = styled(faRegular.Handshake)`
    color: #fff;
`

const Header = props =>
    <CustomContainer 
        bleed={true}
        height={['200px','300px']}
        flexDirection='column'
        color='white'
    >
        <Navbar />
        <Container
            bleed={true}
            justifyContent='center'
        >
            <Container
                mt={4}
                flexDirection='row'
                justifyContent='space-between'
            >
                <Flex
                    flexDirection='column'
                >
                    <Text>Welcome to Salam App! </Text><br />
                    <Heading>Let's 'bersalaman' to get closer!</Heading>
                    <CTAButton>Let's Jom!</CTAButton>
                </Flex>
                <Box>
                    <Handshake size='170' />
                </Box>
            </Container>
        </Container>
    </CustomContainer>

export default Header