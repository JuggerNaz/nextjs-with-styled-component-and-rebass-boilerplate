import React from 'react'
import { Flex } from 'rebass'

const Row = props =>
    <Flex
        width={1}
        justifyContent='center'
        px={2}
        {...props}
    />

export default Row