import { BiLike, BiDislike } from "react-icons/bi";
import "./postbox.css"
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import coracao from "../assets/coracao.svg";
import coracaov from "../assets/CoracaoVermelho.svg";
import coment from "../assets/comentario.svg"
import TextBox from "./textbox";


function PostBox(id, text){
    const [countLike, setCountLike] = useState(0);
    const [countComent, setCountComent] = useState(0);
    const [enableComent, setEnableComent] = useState(false);
    const [post,setPost] = useState({});

    let meucoracao = coracao;
    if (countLike >=1){
        meucoracao = coracaov;
    }

     useEffect(() => {
        const getData = async () => {
          try {
            const res = await axios.get(
              `http://localhost:5000/painel`,
              {
                headers: {
                  "Cache-Control": "no-cache",
                  Pragma: "no-cache",
                  Expires: "0",
                },
              },
            );
    
            setPost(res.data.atividades[id]);

            console.log("Success:", res.data.atividades[id]);
          } catch (err) {
            console.error("Erro ao carregar API", err);
          }
        };
        getData();
      }, []);

    return(
        <div className="title">{id}
         <div className="corpo"> 
            <p>{id}</p>
            </div>
         <footer> 
            <p>  
            <button className="btnLike" onClick={() => setCountLike(countLike + 1)}>  
                <img src={meucoracao}></img>
            </button> {countLike}

            <button className="btnLike" onClick={() => {setEnableComent(true)}}>
                <img src={coment}></img>
            </button> 
            {countComent}
            </p>

         </footer>
         {enableComent && <TextBox></TextBox>}
        </div>
    );
}
export default PostBox;