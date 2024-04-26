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

    document.addEventListener("DOMContentLoaded", function() {
    // Add an event listener to the login form's submit button
    document.querySelector('.form-container #login-submit').addEventListener('click', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        console.log(username);
        console.log(password);
        
        // Send a POST request to LoginServlet
        fetch('LoginServlet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the servlet
            console.log(data);
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
        })
        .catch(error => {
            // Handle any errors
            console.error('Error:', error);
        });
    })
});
    </>
  );
}

export default App;