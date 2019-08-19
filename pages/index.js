import styled from 'styled-components'
import { Flex, Box, Text, Heading } from 'rebass'

const Title = styled.h1`
    color: red;
`

const Container = styled(Flex)`
    border: 1px solid red
`

export default () => (
    <Container
        width={1}
        p={3}
        justifyContent='center'
    >
        <Heading
            fontSize={[5, 6, 7]}
            color='primary'
        >
            Salam!
        </Heading>
    </Container>
)