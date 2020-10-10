import React from 'react'
import { Button, Form, Container } from 'semantic-ui-react'

const LoginForm = ({ handleAuth }) => (
    <Container className="login-form">
        <Form>
            <Form.Field>
                <label>Login</label>
                <input placeholder='Any login' />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input placeholder='Any password' type='password' />
            </Form.Field>
            <Button type='submit' onClick={handleAuth}>Submit</Button>
        </Form>
    </Container>
)

export default LoginForm;
