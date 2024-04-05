import  Login  from '../Pages/Login';
import  Home from './Home';
import { Routes, Route } from 'react-router-dom';

export default function () {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}