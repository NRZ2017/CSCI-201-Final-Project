import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const CenteredDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 80px;
    margin-right: 20%;
`;

localStorage.setItem('seconds', 0);
localStorage.setItem('minutes', 0);
localStorage.setItem('hours', 0);

export default function CountdownTimer() {
    const [hours,setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [milliseconds, setMilliseconds] = useState(0);
    const [isRunning, setIsRunning] = useState(null);
    //End of Time

    const navigate = useNavigate(); // Initialize the navigate function

    const [showEndScreen, setShowEndScreen] = useState({
        show: false,
        message: "Timer done",
    })

    function startTimer() {
        const hours = parseInt(localStorage.getItem('hours'));
        const minutes = parseInt(localStorage.getItem('minutes'));
        const seconds = parseInt(localStorage.getItem('seconds'));
        if (hours !== 0 || minutes !== 0 || seconds !== 0) {
            setIsRunning(true);
            localStorage.setItem('isRunning', 'true');
            navigate("/session"); // Redirect to "/session" route
        }
        else {
            window.alert("set session time!");
        }
    }
    const changeSeconds=(e)=> {
        const newValue = e.target.value;
        localStorage.setItem('seconds', newValue);
        console.log(newValue);
        setSeconds(e.target.value);
    }
    const changeMinutes=(e)=> {
        const newValue = e.target.value;
        localStorage.setItem('minutes', newValue);
        console.log(newValue);
        setMinutes(e.target.value);
    }
    const changeHours=(e)=> {
        const newValue = e.target.value;
        localStorage.setItem('hours', newValue);
        console.log(newValue);
        setHours(e.target.value);
    }
    return (
        <>
        <h1 className="title" style={{ textAlign: 'center', marginTop: '60px'}}>Set Session Time</h1>
        {showEndScreen.show && <h1>{showEndScreen.message}</h1>}
        <Timer 
            seconds={seconds} 
            minutes={minutes} 
            hours={hours} 
            changeSeconds={changeSeconds}
            changeMinutes={changeMinutes}
            changeHours={changeHours}
        />

        <br />
        <CenteredDiv>
        {!isRunning && (
            // Render the button only if isRunning is false
            <button onClick={startTimer}>Start Session</button>
        )}
        </CenteredDiv>
        </>
    );
    }