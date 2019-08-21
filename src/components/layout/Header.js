import React from 'react'
import { Flex, Box, Heading, Text } from 'rebass'
import styled from 'styled-components'

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
    background: red;
    text-align: center;
    margin: 15px 0px;
`

const Header = props =>
    <CustomContainer 
        bleed={true}
        height={['200px','300px']}
        flexDirection='column'
    >
        <Navbar />
        <Container
            bleed={true}
            justifyContent='center'
        >
            <Container
                mt={4}
                flexDirection='column'
            >
                <Text>Welcome to Salam App! </Text><br/>
                <Heading>Let's 'bersalaman' to get closer!</Heading>
                <CTAButton>Let's Jom!</CTAButton>
            </Container>
        </Container>
    </CustomContainer>

export default Header