import React from 'react'
import styled from 'styled-components'
import { Flex, Box, Heading, Button, Link } from 'rebass'

const Navlink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
`

const Navbar = props =>
    <Flex
        alignItems='center'
        px={3}
        py={4}
        width={1}
        height='50px'
        color='white'
    >
        <Heading>Salam App</Heading>
        <Box mx='auto' />
        <Navlink href='#about' ml={2}>How</Navlink>
        <Navlink href='#readmore' ml={2}>Testimoni</Navlink>
        <Button ml={2} bg='#480E87'
            style={{
                webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.5)',
                mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.5)',
                boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.5)'
            }}
        >Beep</Button>
        <Button ml={2} bg='#480E87'
            style={{
                webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.5)',
                mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.5)',
                boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.5)'
            }}
        >Boop</Button>
    </Flex>

export default Navbar