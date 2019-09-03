import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'

//local
import Home from '../src/components/layout/Home'
import Header from '../src/components/layout/Header'
import { Container, Row } from '../src/components/layout'
import Title from '../src/components/core/Title'

const ContentContainer = styled(Flex)`
`

export default () => (
    <Home>
        <Header />
        <Row>
            <Container
                flexDirection='row'
                justifyContent='space-between'
                py={3}
            >
                <Flex
                    flexDirection='column'
                >
                    <Title text='How we do it?' />
                    <Box>
                        1. See each other
                    </Box>
                    <Box>
                        2. Greet each other
                    </Box>
                    <Box>
                        3. Shake hand each other
                    </Box>
                </Flex>
                <Flex>
                    test
                </Flex>
            </Container>
        </Row>
    </Home>
)