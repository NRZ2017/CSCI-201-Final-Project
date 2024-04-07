import { Link } from 'react-router-dom';

export default function Home() { 
   return (
         <div>
              <h1>Home</h1>
              <Link to="/">Login</Link>
              <br></br>
              <Link to="/StartSession">Start Session</Link>
         </div>
   )
}