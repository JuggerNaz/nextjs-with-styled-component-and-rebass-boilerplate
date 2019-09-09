import { Form, Text } from 'informed'
import styled from 'styled-components'

const StyledFormText = styled(Text)`
    display: block;
    padding: 10px;
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

const validate = value => {
    return !value || value.length < 5
        ? 'Field must be at least five characters'
        : undefined;
};

const RegisterForm = props =>
    <StyledForm>
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
        <StyledButton type='submit'>Register</StyledButton>
    </StyledForm>

export default RegisterForm