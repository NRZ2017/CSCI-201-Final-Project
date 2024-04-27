import './Home.css';
import TopBar from '../Components/TopBar';
import img1 from './studying.webp';

export default function Home() {
      return (
            <>
                  <div id="wrapper">
                        <TopBar></TopBar>
                        <div id="home_container">
                              <h1>Study-TGT</h1>
                              <h3>"Connect. Collaborate. Conquer your studies"</h3>
                              <br></br><br></br>
                              <img id="mainimg" src={img1} alt="main-img"></img>
                        </div>
                  </div>  
            </>
      )
}