import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

const TimerWrapper = styled.div`
      margin-top: 20vh;
      margin-left: auto;
      margin-right: auto;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 340px;

      
      input {
            width: 150px;
            margin-right: 1rem;
            color: black;
            outline: none;
            border: none;
            font-size: 4.5rem;
            font-weight: 600;
            text-align: center;
            padding: 0rem 0.5rem;
            border: 5px solid;
            
      }
      label {
            margin-bottom: 0.5rem;
      }
      input:hover {
            background-color: rgb(240, 240, 240);
      }
`;

export default function Timer({
    seconds, 
    minutes, 
    hours, 
    changeSeconds,
    changeMinutes,
    changeHours}) {
      return (
        <>
        <TimerWrapper>
            <div className="d-flex flex-column">
                  <label>hh</label> 
                  <input value={hours} onChange={changeHours} />
            </div>{" "}
            <div className="d-flex flex-column">
                  <label>mm</label> 
                  <input value={minutes} onChange={changeMinutes} />
            </div>{" "}
            <div className="d-flex flex-column">
                  <label>ss</label> 
                  <input value={seconds} onChange={changeSeconds} />
            </div>{" "}
        </TimerWrapper>
        </>
      );
    }