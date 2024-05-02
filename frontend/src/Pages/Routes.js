import  Login  from '../Pages/Login';
import  Home from './Home';
import StartSession from './StartSession';
import { Routes, Route } from 'react-router-dom';
import SignUp from './Signup';
import Session from './Session';
import Friends from './Friends';
import Profile from './Profile';
import CountdownTimer from '../Components/CountdownTimer';
import './Routes.css';
import { useEffect, useState } from 'react';

export default function AppRoutes() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [email, setEmail] = useState("")
  
    useEffect(() => {
      // Fetch the user email and token from local storage
      const user = JSON.parse(localStorage.getItem("user"))
  
      // If the token/email does not exist, mark the user as logged out
      if (!user || !user.token) {
        setLoggedIn(false)
        return
      }
  
      // If the token exists, verify it with the auth server to see if it is valid
      fetch("http://localhost:3080/verify", {
              method: "POST",
              headers: {
                  'jwt-token': user.token
                }
          })
          .then(r => r.json())
          .then(r => {
              setLoggedIn('success' === r.message)
              setEmail(user.email || "")
          })
    }, [])

    return (
        <Routes>
            <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
            <Route path="/StartSession" element={<StartSession />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/session" element={<Session />} />
            <Route path='/friends' element={<Friends />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/CountdownTimer' element={<CountdownTimer />} />
        </Routes>
    )
}