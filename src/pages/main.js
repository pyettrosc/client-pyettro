import './main.css';
import TextBox from "../components/textbox.js";
import PostBox from '../components/postbox.js';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import PopUp from '../components/popUp.js';
import { jwtDecode } from "jwt-decode";
import MyHeader from "../components/header.js";
import logo from "../assets/SAEPSaude.png";
import ttok from "../assets/tiktok.svg";
import insta from "../assets/instagram.svg";
import tuwit from "../assets/twitter.svg";
import progres from "../assets/progresso.svg";

function HomePage() {
  const [loginLabel, setLoginLabel] = useState("Login");
  const [showPopUp, setShowPopUp] = useState(false);  
  const token = localStorage.getItem('jwtToken'); //
  const [user, setUser] = useState('');
  const [fakeToken, setFakeToken] = useState(false);

  const manipularLoginButton = (e) =>{
   setShowPopUp(true)
   setFakeToken(true)
  }

  return (
    <div className="grid-container">
    <header className="header">
        <MyHeader logedin={fakeToken}
          logout={() => setFakeToken(false)}
          login={manipularLoginButton}></MyHeader>

      </header>
    <aside className="sidebar"> <img src={logo}/> 
    <p> SAEPSaude</p> 
    <button className='meusicones'><img src={progres}/>Atividades</button>
    <div className='invisivel'></div>
    <p>SAEPSaude</p>
    <div className='meusicones'>
      <img src={ttok}/>
      <img src={insta}/>
      <img src={tuwit}/>
    </div>

    </aside>
    <main className="content">

    <PopUp showPopUp={showPopUp} closePopUp={()=>setShowPopUp(false)}>
            
            </PopUp>
 
      {PostBox("JUJUBA", user)}
      {PostBox("Frutas", "prefiro chocolate")}
      <div className="post">Post 3</div>
      <div className="post">Post 4</div>
    </main>
  </div>
  );
}

export default HomePage;