import './Profile.css';
import img1 from './profile-picture.png';
import TopBar from '../Components/TopBar';

export default function Profile() {
    return (
        <>
            <TopBar></TopBar>
            <br></br> <br></br>
            <div class="logo">LOGO</div>
            <div class="container">
                <div id="top">
                    <div id="topleft">
                        <img class="profile-pic" src={img1} alt="Profile Picture"/>
                        <p>(put username here if we want)</p>
                    </div>
                    <div id="topright">
                        <p>FIRST NAME: Cinna</p>
                        <p>LAST NAME: Moroll</p>
                        <p>EMAIL: ***oll@gmail.com</p>
                        <p>PASSWORD: ***********e*</p>
                    </div>
                </div>
                <div id="bottom">
                    <p>BIRTHDAY: <input type="text" value="03/06" /></p>
                    <p>BIO:</p>
                    <div id="bio">
                        <p>I was born on a cloud in the sky, I'm shy but I'm friendly and always willing to make new friends</p>
                    </div>
                </div>
            </div>
        </>
    )
}