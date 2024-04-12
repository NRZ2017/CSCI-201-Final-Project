import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './GuestJoin.css';
import { Link } from 'react-router-dom';

export default function GuestJoin () {
    return (
        <>
            <Form className="gj">
                    <div id="inside">
                    <div className="guestJoinText">Want to join session as guest? Join Session Now! </div>
                    <Link to="/session"><strong>Click Here</strong></Link>
                    </div>
                </Form>
            
        </>
        
    )
}