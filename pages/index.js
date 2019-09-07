import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
 
//local
import Home from '../src/components/layout/Home'
import Header from '../src/components/layout/Header'
import { Container, Row } from '../src/components/layout'
import Title from '../src/components/core/Title'
import RoundButton from '../src/components/core/RoundButton'
import RegisterForm from '../src/components/layout/RegisterForm'

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
                    <Flex
                        mb={3}
                    >
                        <Box
                            width={1/3}
                        >
                            <RoundButton>1</RoundButton>
                        </Box>
                        <Box
                            width={2/3}
                        >
                            See each other
                        </Box>
                    </Flex>
                    <Flex
                        mb={3}
                    >
                        <Box
                            width={1 / 3}
                        >
                            <RoundButton>2</RoundButton>
                        </Box>
                        <Box
                            width={2 / 3}
                        >
                            Greet each other
                        </Box>
                    </Flex>
                    <Flex
                        mb={3}
                    >
                        <Box
                            width={1 / 3}
                        >
                            <RoundButton>3</RoundButton>
                        </Box>
                        <Box
                            width={2 / 3}
                        >
                            Shake hand each other
                        </Box>
                    </Flex>
                </Flex>
                <Flex
                    width={[1, '300px']}
                >
                    <RegisterForm />
                </Flex>
            </Container>
        </Row>
    </Home>
)