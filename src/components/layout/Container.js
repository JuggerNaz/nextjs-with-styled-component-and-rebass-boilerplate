import React from 'react'
import { Flex } from 'rebass'

const Container = props =>
    props.bleed ?
        <Flex
            width={1}
            {...props}
        />
        :
        <Flex
            width={[1,'980px']}
            {...props}
        />

export default Container