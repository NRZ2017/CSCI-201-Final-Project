import TopBar from "../Components/TopBar"
import './Profile.css';

export default function Profile() {
    return (
        <>
            <TopBar />
            <div className="logo">LOGO</div>
            <img className="profile-pic" src="profile-picture.png" alt="Profile Picture" />
            <div className="info">
                <p>FIRST NAME: Cinna</p>
                <p>LAST NAME: Moroll</p>
                <p>EMAIL: ***oll@gmail.com</p>
                <p>PASSWORD: ************</p>
                <button className="edit-btn">EDIT</button>
                <p>BIRTHDAY: <input type="text" value="03/06" /></p>
                <p>BIO:</p>
                <p>I was born on a cloud in the sky, I'm shy but I'm friendly and always willing to make new friends</p>
            </div>
        </>
    )
}
