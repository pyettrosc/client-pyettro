import { BiLike, BiDislike } from "react-icons/bi";
import "./postbox.css"
import { useState } from "react";

function PostBox(title, text){
    const [countLike, setCountLike] = useState(0);
    const [countDislike, setCountDislike] = useState(0);

    return(
        <div className="title">{title}
         <div className="corpo"> 
            <p>{text}</p>
            </div>
         <footer> 
            <p>  
            <BiLike className="btnLike" onClick={() => setCountLike(countLike + 1)}/> 
            {countLike} 
            <BiDislike className="btnLike"  onClick={() => setCountDislike(countDislike + 1)}/>
            {countDislike} 
            </p>
         </footer>
        </div>
    );
}
export default PostBox;