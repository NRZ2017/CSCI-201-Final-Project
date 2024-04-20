import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LoginForm.css';

export default function LoginForm() {
    return (
        <>
        <Form className='fo'>
            <Form.Group className='mb-3' controlId='input-uname'>
                <Form.Label>Username</Form.Label> 
                <Form.Control type='text' placeholder='Enter username' />
                
            </Form.Group>
            <Form.Group className='mb-3' controlId='input-pwd'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter Password' />
            </Form.Group>
            <Button variant='primary' onClick={verifyLogin}>
                START STUDYING
            </Button>
        </Form>
        </>
    )
}

function verifyLogin() {
    var baseURL = window.location.origin + "/Login";
    var url = new URL(baseURL);
    var params = {
        username: document.getElementById("input-uname").value,
        password: document.getElementById("input-pwd").value
    };
    url.search = new URLSearchParams(params).toString();
    console.log(url);
    fetch(url)
        .then(response => response.text())
        .then(d => {
            if(d === "Success") {
                window.location.href = "/Home";
            }
            else {
                alert("Invalid username or password. Please try again.");
            }
        })
}