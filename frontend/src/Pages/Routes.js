import  Login  from '../Pages/Login';
import  Home from './Home';
import StartSession from './StartSession';
import { Routes, Route } from 'react-router-dom';
import SignUp from './Signup';
import Session from './Session';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/StartSession" element={<StartSession />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/session" element={<Session />} />
        </Routes>
    )
}