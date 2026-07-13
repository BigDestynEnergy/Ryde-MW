import { useState } from "react"
import eyee from "../assets/eye.svg"
import eyes from "../assets/eye-slash.svg"
import "../styles/Login.css"

export function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [eye, setEye] = useState(false);

    return(
        <div className="Log">
            <form>
                
                <h1>Login</h1>
                <input type="email" placeholder="Enter your email" value={email}
                onChange={(e)=>setEmail(e.target.value)} />
            
                <div className="password">
                     <input type={eye ? "text" : "password"} placeholder={eye ? "1Ex6-?L98" : "XXXX-XXXX"}/>
            <img src={eye ? eyee : eyes} onClick={()=>setEye(!eye)} />
                   
                </div>
                <button>Login</button>

                <span className="go-to">Go to signup</span>
            </form>
        </div>
    )
}