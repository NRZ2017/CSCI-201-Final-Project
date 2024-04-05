import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../Components/LoginForm';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
    <LoginForm />
    <div className='Signup'>
            New User? <Link to="/home">Sign up!</Link>
    </div>
    </>
  );
}

export default App;
