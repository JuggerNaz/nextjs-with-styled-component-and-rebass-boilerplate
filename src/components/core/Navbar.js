import React from 'react'
import styled from 'styled-components'
import { Flex, Box, Heading, Button as ButtonBase, Link } from 'rebass'

const Navlink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
`

const Button = styled(ButtonBase)`
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
`

const Navbar = props =>
    <Flex
        alignItems='center'
        px={[2, 5]}
        py={3}
        width={1}
        height='50px'
        color='white'
    >
        <Heading>Salam App</Heading>
        <Box mx='auto' />
        <Navlink href='#about' ml={2}>How</Navlink>
        <Navlink href='#readmore' ml={2}>Testimoni</Navlink>
        <Button 
            ml={2} 
            bg='#480E87'
        >
            Login
        </Button>
        <Button 
            ml={2} 
            bg='#480E87'
        >
            Register
        </Button>
    </Flex>

export default Navbar