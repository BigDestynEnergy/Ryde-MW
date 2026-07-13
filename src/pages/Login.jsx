import { useState } from "react"
import eyee from "../assets/eye.svg"
import eyes from "../assets/eye-slash.svg"
import "../styles/Login.css"
import { useNavigate } from "react-router-dom";

import { usePopup } from "../contexts/PopupContent";

export function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [eye, setEye] = useState(false);
    const [success, setSuccess] = useState(false);
    const [note, setNote] = useState("");
    const navigate = useNavigate();
    
    const { showPopup } = usePopup();

    function notify(value){
        setNote(value);
        setTimeout(() => {
            setNote("")
        }, 2000);
    }

     function clearOut(){
         setTimeout(()=>{
            setEmail(``); setPassword(``)
            setSuccess(false)
        }, 2000) 
    }
    const submit = async(e)=>{
        e.preventDefault();
        if(!email.trim()){
            notify("Please enter your email");
            return;
        }
        
        if(!email.includes("@")){
            notify("Please enter a valid email");
            return;
        }
        if(!email.includes(".")){
            notify("Your email is missing a '.'");
            return;
        }
        if(!password.trim()){
            notify("Enter your password");
            return;
        }

        if(password.length < 8){
            notify("Password must be at least 8 characters")
            return;
        }
       

        try{
            const response = await fetch("http://localhost:3000/main",
                {method: "POST",
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({email, password})
                }
            ) 
            const data = await response.json();
            console.log(`Response from server: ${data}`);
        } catch (error) {
            notify(`${error}`)
        } finally{
            console.log(`Requested completed`);
            
        }

        clearOut();
        
    }

    return(
        <div className="Log">
            <form onSubmit={submit}>
                
                <h1>Login</h1>
                {note && (<span className={success ? "success note" : "note"}>{note}</span>)}
                <input type="email" placeholder="Enter your email" value={email}
                onChange={(e)=>setEmail(e.target.value)} />
            
                <div className="password">
                     <input
                     value={password}
                     onChange={(e)=>setPassword(e.target.value)}
                     type={eye ? "text" : "password"} placeholder={eye ? "1Ex6-?L98" : "XXXX-XXXX"}/>
            <img src={eye ? eyee : eyes} onClick={()=>setEye(!eye)} title={eye ? "Hide password" : "Show password"} />
                   
                </div>
                <button type="submit">Login</button>
                
                <div className="go">
                Don't have an account?
                <span className="go-to" 
                onClick={()=>navigate("/signup")}
                >Sign up</span> </div>

            </form>
          
        </div>
    )
}