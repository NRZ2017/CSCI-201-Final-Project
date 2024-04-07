import  Login  from '../Pages/Login';
import  Home from './Home';
import StartSession from './StartSession';
import { Routes, Route } from 'react-router-dom';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/StartSession" element={<StartSession />} />
        </Routes>
    )
}