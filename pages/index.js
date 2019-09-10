import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import { QuoteAltLeft, QuoteAltRight } from 'styled-icons/boxicons-solid/'
 
//local
import Home from '../src/components/layout/Home'
import Header from '../src/components/layout/Header'
import { Container, Row } from '../src/components/layout'
import Title from '../src/components/core/Title'
import RoundButton from '../src/components/core/RoundButton'
import RegisterForm from '../src/components/layout/RegisterForm'
import Footer from '../src/components/layout/Footer'

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
    position: relative;
`

const StandardIconStyle = `
    height: 35px;
    width: 35px;
    color: #480E87;
    position: absolute;
    z-index: 1;
`

const IconQuoteLeft = styled(QuoteAltLeft)`
    ${StandardIconStyle}
    top: 0px;
    left: 0px;
`

const IconQuoteRight = styled(QuoteAltRight)`
    ${StandardIconStyle}
    bottom: 0px;
    right: 0px;
`

const QuoteAvatar = styled(Flex)`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background: #480E87;
    border: 2px solid #fff;
    position: absolute;
    left: 20px;
    bottom: -20px;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    color: #fff;
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
        <Row
        >
            <Container
                flexDirection='column'
                justifyContent='center'
                py={4}
            >
                <Row>
                    <Title text='Testimoni' />
                </Row>
                <Row>
                    <StyledBox
                        mx={3}
                        my={3}
                        px={3}
                        py={5}
                    >
                        <IconQuoteLeft />
                        Assalamualaikum ya akhi ya ukhti
                        Assalamualaikum ya akhi ya ukhti
                        Assalamualaikum ya akhi ya ukhti
                    <IconQuoteRight />
                        <QuoteAvatar
                            alignItems='center'
                            justifyContent='center'
                        >
                            NM
                    </QuoteAvatar>
                    </StyledBox>
                    <StyledBox
                        mx={3}
                        my={3}
                        px={3}
                        py={5}
                    >
                        <IconQuoteLeft />
                        Assalamualaikum ya akhi ya ukhti
                        Assalamualaikum ya akhi ya ukhti
                        Assalamualaikum ya akhi ya ukhti
                    <IconQuoteRight />
                        <QuoteAvatar
                            alignItems='center'
                            justifyContent='center'
                        >
                            AJ
                    </QuoteAvatar>
                    </StyledBox>
                    <StyledBox
                        mx={3}
                        my={3}
                        px={3}
                        py={5}
                    >
                        <IconQuoteLeft />
                        Assalamualaikum ya akhi ya ukhti
                        Assalamualaikum ya akhi ya ukhti
                        Assalamualaikum ya akhi ya ukhti
                    <IconQuoteRight />
                        <QuoteAvatar
                            alignItems='center'
                            justifyContent='center'
                        >
                            SH
                    </QuoteAvatar>
                    </StyledBox>
                </Row>
            </Container>
        </Row>
        <Footer />
    </Home>
)