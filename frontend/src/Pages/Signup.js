import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Signup.css';

export default function Signup() {
    return (
        <>
        <Navbar bg="primary" data-bs-theme="dark" id="topBar">
        <Container id = "container">
          <Navbar.Brand>Navigation</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Sign-in</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
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
            <Button variant='primary' onClick={verifySignup}>
                SIGN UP
            </Button>
        </Form>
        </div>
        </>
    )
}

function verifySignup() {
    var baseURL = window.location.origin + "/Login";
    var url = new URL(baseURL);
    var params = {
        field: "signup",
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        uname: document.getElementById("username").value,
        pass: document.getElementById("password").value
    };
    url.search = new URLSearchParams(params).toString();
    console.log(url);
    fetch(url)
        .then(response => response.text())
        .then(d => {
            console.log(d);
            if(d === "Success") {
                window.location.href = "/Home";
            }
            else {
                alert("Account already in system. Please try again.");
            }
        })
}