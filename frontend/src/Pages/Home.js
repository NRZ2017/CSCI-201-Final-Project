import React from "react"
import { useNavigate } from "react-router-dom";
import { Backpack } from 'react-kawaii'
import TopBar from "../Components/TopBar";
import GuestJoin from "../Components/GuestJoin";


const Home = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate();
    
    const onButtonClick = () => {
        if (loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
        } else {
            navigate("/login")
        }
    }


    return <div className="mainContainer">
       {loggedIn && <TopBar />}
        <div className={"titleContainer"}>
            <div>Welcome!</div>
        </div>
        <div>
            "Connect, Collaborate, Conquer your studies"
        </div>
        <div className={"buttonContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={loggedIn ? "Log out" : "Log in"} />
            {(loggedIn ? <><div>
                Your email address is {email}
            </div></> : <div/>)}
            {(!loggedIn ? <div><GuestJoin></GuestJoin></div> : <div/>)}
        </div>
        <div className="backpackContainer">
            <Backpack size={300} mood="blissful" color="#ffbaaf" />
        </div>


    </div>
}

export default Home