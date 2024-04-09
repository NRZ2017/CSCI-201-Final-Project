import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './GuestJoin.css';

export default function GuestJoin () {
    return (
        <>
            <Form className="gj">
                    <div id="inside">
                    <div className="guestJoinText">Want to join session as guest? Enter session code: </div>
                    <div>
                        <Form.Group className="mb-3" controlId="joinCode">
                            <Form.Control type='text' placeholder=''/>
                        </Form.Group>
                        <Button variant='primary' type='submit'>
                            JOIN SESSION
                        </Button>
                    </div>
                    </div>
                </Form>
            
        </>
        
    )
}