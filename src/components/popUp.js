import React, {useState} from 'react';
import "./popUp.css";
import axios from "axios";


function PopUp({showPopUp, closePopUp}){
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const manipularSenha = (e) =>{
    setSenha(e.target.value) 
    console.log(senha)
  }

  const manipularEmail = (e) => { //nameHandler
        setEmail(e.target.value);
        console.log(email)
    };

  const postLogin = async () => {
  try{
    const response =  await axios.post('http://localhost:5000/login',{ 
      email:email,
      senha:senha,
    },{
  })
    console.log(response);

    if (response.data.token) {
      console.log(response.data.token);

      localStorage.setItem('jwtToken', response.data.token); 
    }
    closePopUp()
  } 
    catch (e){return null }
  }

 
  if (!showPopUp) {return null}
  return (
    <div className="PopUp" >
        <label>Login:</label>
        <input className='inputPopup' onChange={manipularEmail} placeholder='login'></input>
        <label>Senha:</label>
        <input className='inputPopup' onChange={manipularSenha} placeholder='senha'></input>
        <div className="buttonLine">
        <button className='login' onClick={() => postLogin()}>Logar</button>
        <button className='close' onClick={closePopUp}>Cancelar</button>
        </div>
    </div>
  );
};

export default PopUp;