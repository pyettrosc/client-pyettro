import {Link} from "react-router-dom";

function MyHeader({logedin,logout, login}){


if (logedin){ 
return ( <div>
<button className="logButton" onClick={ logout } >Logout</button>
</div>)}

return (<div> 
<Link to="/registrar">Sign in</Link>
<button className="logButton" onClick={login} >Login</button>
</div>)

}

export default MyHeader;