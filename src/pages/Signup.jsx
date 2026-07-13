
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

    function clearOut(){
         setTimeout(()=>{
            setName(``)
            setEmail(``); setPassword(``)
            setSuccess(false)
        }, 2000) 
    }

  const submit = async (e) => {
        e.preventDefault();
         if(!name.trim()){
            notify("Please enter your name");
            return;
        }

         if(name.trim().length < 3){
            notify("Enter a valid name");
            return;
        }
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

        if(!/[0-9]/.test(password)){
            notify("Add a number")
            return;
        }

        if(!/[^A-Za-z0-9]/.test(password)){
            notify("Add a special character")
            return;
        }

        try{
            const response = await fetch("http://localhost:3000/main");
            if(!response.ok){
                notify("something went wrong");
                return;
            }
            const users = await response.json();
            
            const user = users.some(person => person.name.toLowerCase() === name.toLowerCase());
            if(user){
                notify("This user already exists")
                return;
            }
        } catch (error){
            notify(`${error}`)
        } finally{
            console.log(`Request completed`);
        }
        
        setSuccess(true);
        notify("Signup successful")
        clearOut()
       
    }

    return(
        <div className="Log">
            <form onSubmit={submit}>
                <h1>Lets get started</h1>
                {note && (<span className={success ? "success note" : "note"}>{note}</span>)}
                
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your full name" />
                
                <input type="email" placeholder="Enter your email" value={email}
                onChange={(e)=>setEmail(e.target.value)} />
            
                <div className="password">
                     <input 
                     onChange={(e)=>setPassword(e.target.value)}
                     value={password}
                     type={eye ? "text" : "password"} placeholder={eye ? "1Ex6-?L98" : "XXXX-XXXX"}/>
            <img src={eye ? eyee : eyes} onClick={()=>setEye(!eye)} title={eye ? "Hide password" : "Show password"} />
                   
                </div>
                <button type="submit">Login</button>

            <div className="go">
                Already have an account? 
                <span className="go-to" 
                onClick={()=>navigate("/")}
                >Login</span> </div>
            </form>
        </div>
    )
}