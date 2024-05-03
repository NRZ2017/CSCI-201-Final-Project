import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './GuestJoin.css';
import { Link } from 'react-router-dom';

export default function GuestJoin () {
    return (
        <>
        <Form className="gj">
                <div id="inside">
                <div className="guestJoinText">What to join session as a guest?</div>
                <Link to="/session" style={{ display: 'block', textAlign: 'center' }}><bold id='click'>Click Here</bold></Link>
                </div>
        </Form>
        
    </>
        
    )
}