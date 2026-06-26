import {Link} from "react-router-dom";
import "./header.css";

function MyHeader({logedin,logout, login}){


if (logedin){ 
return ( <div>
<button className="logoutButton" onClick={ logout } >Logout</button>
</div>)}

return (<div> 
<button className="loginButton" onClick={login} >Login</button>
</div>)

}

export default MyHeader;