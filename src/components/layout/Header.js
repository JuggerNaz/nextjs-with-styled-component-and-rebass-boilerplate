import React from 'react'
import { Flex, Box, Heading } from 'rebass'
import styled from 'styled-components'

//local
import Container from './Container'
import Navbar from '../core/Navbar'

const CustomContainer = styled(Container)`
    background: rgb(134,37,205);
    background: linear-gradient(45deg, rgba(134,37,205,1) 0%, rgba(200,49,216,1) 100%);
`;

const Header = props =>
    <CustomContainer 
        bleed={true}
        height={['200px','350px']}
    >
        <Navbar />
    </CustomContainer>

export default Header