import React from 'react'
import styled from 'styled-components'
import { Flex, Box, Heading, Button } from 'rebass'

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
        <Button>Beep</Button>
        <Button ml={2} variant='secondary'>Boop</Button>
    </Flex>

export default Navbar