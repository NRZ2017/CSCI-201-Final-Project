import React from "react";
import CountdownTimer from "../Components/CountdownTimer";
import TopBar from '../Components/TopBar';

function App() {
      return (
            <>
            <TopBar></TopBar>
            <div className="App">
                  <CountdownTimer />
            </div>
            </>
      );
}

export default App;