
import { useState } from "react"
import eyee from "../assets/eye.svg"
import eyes from "../assets/eye-slash.svg"
import "../styles/Login.css"
import { useNavigate } from "react-router-dom";

export function Signup(){
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("")
    const [eye, setEye] = useState(false);
    const [success, setSuccess] = useState(false);
    const [note, setNote] = useState("");
    const navigate = useNavigate();

    function notify(value){
        setNote(value);
        setTimeout(() => {
            setNote("")
        }, 2000);
    }

  const submit = (e)=>{
        e.preventDefault();
        if(!email){
            notification("Please enter your email");
            return;
        }
        if(!email.includes("@")){
            notification("Please enter a valid email");
            return;
        }
    }

    return(
        <div className="Log">
            <form onSubmit={submit}>
                <h1>Lets get started</h1>
                {note && (<span className={success ? "success note" : "note"}>Yo</span>)}
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your full name" />
                <input type="email" placeholder="Enter your email" value={email}
                onChange={(e)=>setEmail(e.target.value)} />
            
                <div className="password">
                     <input type={eye ? "text" : "password"} placeholder={eye ? "1Ex6-?L98" : "XXXX-XXXX"}/>
            <img src={eye ? eyee : eyes} onClick={()=>setEye(!eye)} title={eye ? "Hide password" : "Show password"} />
                   
                </div>
                <button type="submit">Login</button>

                <span className="go-to" 
                onClick={()=>navigate("/")}
                >Go to login</span>
            </form>
        </div>
    )
}