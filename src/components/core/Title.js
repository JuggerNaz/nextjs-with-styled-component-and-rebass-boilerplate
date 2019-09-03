import React from 'react'
import { Heading } from 'rebass'

const Title = props =>
    <Heading
        as='h1'
        my={3}
        {...props}
        color='#480E87'
        fontSize='35px'
        fontWeight='bold'
    >
        { props.text }
    </Heading>

export default Title
