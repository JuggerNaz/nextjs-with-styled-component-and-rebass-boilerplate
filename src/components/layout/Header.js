import React from 'react'
import { Flex, Box, Heading, Text } from 'rebass'
import styled from 'styled-components'
import * as faRegular from 'styled-icons/fa-regular/'

//local
import Container from './Container'
import Navbar from '../core/Navbar'
import CtaButton from '../core/CtaButton'

const CustomContainer = styled(Container)`
    background: rgb(134,37,205);
    background: linear-gradient(45deg, rgba(134,37,205,1) 0%, rgba(200,49,216,1) 100%);
    -webkit-box-shadow: inset 0px -5px 7px -5px rgba(0,0,0,0.5); 
    box-shadow: inset 0px -5px 7px -5px rgba(0,0,0,0.5);
`

const Handshake = styled(faRegular.Handshake)`
    color: #fff;`

const Header = props =>
    <CustomContainer 
        bleed={true}
        height={['200px','300px']}
        flexDirection='column'
        color='white'
    >
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
                    <CtaButton>Let's Jom!</CtaButton>
                </Flex>
                <Box>
                    <Handshake size='170' />
                </Box>
            </Container>
        </Container>
    </CustomContainer>

export default Header