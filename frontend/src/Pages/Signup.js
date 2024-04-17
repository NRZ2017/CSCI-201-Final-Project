import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Signup.css';

export default function Signup() {
    return (
        <>
        <div className='Signup'>
            <Form className='sup'>
            <h1 id="topSign">Sign Up</h1>
            <Form.Group className='mb-3' controlId='fname'>
                <Form.Label>First Name</Form.Label> 
                <Form.Control type='text' placeholder='Enter First Name' />
                
            </Form.Group>
            <Form.Group className='mb-3' controlId='lname'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type='text' placeholder='Enter Last Name' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Enter Email' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='username'>
                <Form.Label>Username</Form.Label>
                <Form.Control type='text' placeholder='Enter Username' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter Password' />
            </Form.Group>
            <Button variant='primary' type='submit'>
                SIGN UP
            </Button>
        </Form>
        </div>
        </>
    )
}