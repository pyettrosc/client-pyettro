import './main.css';
import TextBox from "../components/textbox.js";
import PostBox from '../components/postbox.js';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import PopUp from '../components/popUp.js';
import { jwtDecode } from "jwt-decode";
import MyHeader from "../components/header.js"

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

    {/* <Link to='/registrar'>Cadastrar</Link>
    <button className="logButton" onClick={() => {setShowPopUp(true)} } >{loginLabel}</button> */}
      </header>
    <aside className="sidebar">Menu Lateral</aside>
    <main className="content">
    <PopUp showPopUp={showPopUp} closePopUp={()=>setShowPopUp(false)}>
            
            </PopUp>
 
      {TextBox()}
      {PostBox("JUJUBA", user)}
      {PostBox("Frutas", "prefiro chocolate")}
      <div className="post">Post 3</div>
      <div className="post">Post 4</div>
    </main>
  </div>
  );
}

export default HomePage;
