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
        <div className='login'>
          <LoginForm className="lform" />
          <div className='Signup'>
                New User? <Link to="/signup">Sign up!</Link>
          </div>
        </div>
      </div>
        <div className='Guest'>
          <GuestJoin className="gform" />
        </div>
    </div>
    </>
  );
}

export default App;