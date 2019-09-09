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

const StyledBox = styled(Flex)`
    height: 250px;
    width: 250px;
    background-image: -webkit-linear-gradient(top, transparent 0%, rgba(0,0,0,.05) 100%);
	-webkit-transition: 1s all;
	background-image: -webkit-linear-gradient(left top, 
		transparent 0%, transparent 25%, 
		rgba(0,0,0,.15) 25%, rgba(0,0,0,.15) 50%, 
		transparent 50%, transparent 75%, 
		rgba(0,0,0,.15) 75%);
    background-size: 4px 4px;
    text-align: center;
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
                    width={[1, '400px']}
                    marginTop={['-60px']}
                >
                    <RegisterForm />
                </Flex>
            </Container>
        </Row>
        <Row>
            <Container
                flexDirection='row'
                justifyContent='center'
                py={3}
            >
                <StyledBox
                    mx={2}
                    my={3}
                    p={3}
                >
                    lorem ipsum dolor sit amet
                </StyledBox>
                <StyledBox
                    mx={2}
                    my={3}
                    p={3}
                >
                    lorem ipsum dolor sit amet
                </StyledBox>
                <StyledBox
                    mx={2}
                    my={3}
                    p={3}
                >
                    lorem ipsum dolor sit amet
                </StyledBox>
            </Container>
        </Row>
    </Home>
)