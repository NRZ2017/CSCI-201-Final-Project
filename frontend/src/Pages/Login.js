import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../Components/LoginForm';
import { Link } from 'react-router-dom';
import GuestJoin from '../Components/GuestJoin';

function App() {
  return (
    <>
    <div className="both">
      <div>
        <LoginForm className="lform" />
        <div className='Signup'>
                New User? <Link to="/signup">Sign up!</Link>
        </div>
      </div>
      <GuestJoin className="gform" />
    </div>
    </>
  );
}

export default App;
