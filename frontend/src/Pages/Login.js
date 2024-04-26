import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../Components/LoginForm';
import { Link } from 'react-router-dom';
import GuestJoin from '../Components/GuestJoin';

function App() {
  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    // Send a POST request to LoginServlet
    try {
      const response = await fetch('/LoginServlet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      // Handle successful login, for example, redirect the user
      if (data > 0) {
        console.log('Login successful!');
        // Redirect the user to index.html
        window.location.href = 'index.html?loggedIn=true';
      } else {
        console.error('Login failed: Invalid username or password');
        // Display an error message to the user
        const errorMessage = document.getElementById('loginErrorMessage');
        errorMessage.textContent = 'Login failed: Invalid username or password';
        errorMessage.style.display = 'block';
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap" rel="stylesheet" />
      <div className="both">
        <div>
          <div className='login'>
            <LoginForm onSubmit={handleLogin} className="lform" />
            <div className='Signup'>
              New User? <Link to="/signup">Sign up!</Link>
            </div>
          </div>
        </div>
        <div className='Guest'>
          <GuestJoin className="gform" />
        </div>
<<<<<<< Updated upstream
    </div>
=======
      </div>
>>>>>>> Stashed changes
    </>
  );
}

export default App;
