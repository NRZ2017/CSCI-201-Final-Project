import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LoginForm.css';

export default function LoginForm() {
    return (
        <>
        <Form>
            <Form.Group className='mb-3' controlId='input-uname'>
                <Form.Label>Username</Form.Label>
                <Form.Control type='text' placeholder='Enter username' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='input-pwd'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter Password' />
            </Form.Group>
            <Button variant='primary' type='submit'>
                START STUDYING
            </Button>
        </Form>
        <div className='Signup'>
            New User? 
        </div>
        </>
    )
}