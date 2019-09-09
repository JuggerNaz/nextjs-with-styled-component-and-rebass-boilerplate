import { Form, Text } from 'informed'
import styled from 'styled-components'
import { Heading, Flex } from 'rebass'

const StyledFormText = styled(Text)`
    display: block;
    padding: 15px;
    border-radius: 0px 3px 3px 3px;
    border: 1px solid #8625CD;
    width: 92%;
    font-family: 'Nunito', sans-serif;
    later-spacing: 0.5px;
    margin-bottom: 15px;
    margin-top: -1px;
    -webkit-box-shadow: inset 0px 0px 2px 0px rgba(134,37,205,1);
    -moz-box-shadow: inset 0px 0px 2px 0px rgba(134,37,205,1);
    box-shadow: inset 0px 0px 2px 0px rgba(134,37,205,1);
    background: #f7f7f7;
    font-size: 14px;

`

const StyledForm = styled(Form)`
    width: 100%;
    padding: 5px;
`

const FormLabel = styled.label`
    font-family: 'Nunito', sans-serif;
    later-spacing: 1px;
    font-weight: 400;
    font-size: 14px;
    background: #8625CD;
    color: #fff;
    padding: 0px 5px;
    border-radius: 3px 3px 0px 0px;
`

const StyledButton = styled.button`
    width: 100%;
    padding: 15px 0px;
    font-size: 18px;
    border-radius: 5px;
    background: #480E87;
    text-align: center;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    letter-spacing: 0.5px;
    font-weight: 700;
    color: #fff;
    border:none;
`

const FormHeading = styled(Heading)`
    text-transform: uppercase;
    font-weight: 700;
    display: block;
    background: #FFF;
    padding: 2px 10px;
    color: #333;
    font-size: 35px;
    text-align: center;
    text-decoration: none;
    position: relative;
    z-index: 1;
    text-shadow: 
		1px 1px 0px #FFF, 
		2px 2px 0px #999,
		3px 3px 0px #FFF;
	background-image: -webkit-linear-gradient(top, transparent 0%, rgba(0,0,0,.05) 100%);
	-webkit-transition: 1s all;
	background-image: -webkit-linear-gradient(left top, 
		transparent 0%, transparent 25%, 
		rgba(0,0,0,.15) 25%, rgba(0,0,0,.15) 50%, 
		transparent 50%, transparent 75%, 
		rgba(0,0,0,.15) 75%);
    background-size: 4px 4px;
	box-shadow: 
		0 0 0 1px rgba(0,0,0,.4) inset, 
		0 0 20px -5px rgba(0,0,0,.4),
		0 0 0px 3px #FFF inset;
`

const FormHeadingContainer = styled(Flex)`
    width: 100%;
    height: 80px;
    position: relative;
`

const FormHeadingFirstBg = styled(Flex)`
    height: 80%;
    width: 100%;
    z-index: 1;
    background: #B92FD6;
    border-radius: 3px;
    position: absolute;
    border: 3px solid #fff;
`

const FormHeadingSecondBg = styled(Flex)`
    height: 100%;
    width: 80%;
    z-index: 2;
    background: #8625CD;
    position: absolute;
    border-radius: 50% 3px 50% 3px;
    border: 3px solid #fff;
`

const validate = value => {
    return !value || value.length < 5
        ? 'Field must be at least five characters'
        : undefined;
};

const RegisterForm = props =>
    <StyledForm>
        
        <FormHeadingContainer
            alignItems='center'
            justifyContent='center'
            mb={2}
        >
            <FormHeading
                as='h1'
            >
                Register
            </FormHeading>
        </FormHeadingContainer>
        <FormLabel>
            Name:
        </FormLabel>
        <StyledFormText field='name' validate={validate} />
        <FormLabel>
            Email:
        </FormLabel>
        <StyledFormText field='email' validate={validate} />
        <FormLabel>
            Password:
        </FormLabel>
        <StyledFormText field='password' validate={validate} />
        <FormLabel>
            Repeat Password:
        </FormLabel>
        <StyledFormText field='repeat' validate={validate} />
        <StyledButton type='submit'>Register</StyledButton>
    </StyledForm>

export default RegisterForm