import airtel from "../images/airtel.svg"
import tnm from "../images/tnm.svg"
import fcb from "../images/fcb.jpg"
import nbm from "../images/NBM Logo.png"
import "../styles/checkout.css"
import { useState } from "react"


export default function Checkout({info, setInfo}){

    const [set, setSet] = useState({});
    const [msg, setMsg] = useState("")


    function notify(word){
        setMsg(word);
        setTimeout(() => {
            setMsg("")
        }, 2000);
    }

    const payments = [
        {name: "Airtel MW", icon: airtel, type: "Mobile", bg: "#be0000"},
        {name: "TNM", icon: tnm, type: "Mobile", bg: "#0b640b"},
        {name: "FCB", icon: fcb, type: "Bank", bg: "linear-gradient(to bottom right, #1cd35c, #07174dee)"},
        {name: "NBM", icon: nbm, type: "Bank",  bg: "#11235fd0"},
    ]

    function manageForm(e){
        e.preventDefault();
        if(set === null)notify("Select a payment method");
        if(info.length === 0)notify("No rides to pay for")
    }
    return(
        <section>
            
            <form onSubmit={(e)=>manageForm(e)}>
                {msg ? <span className="note">{msg}</span> : ""}
                <h2>Pay for your ride to continue</h2>
                    <div className="card">
                              {info.length !== 0 ? 
                              
                              info.map((i, index) => {
                                return(
                                    <div className="inner-card">
                                          <div className="line">
                                    <span>From: </span> <span>{i.length === 0 ? "--" :  i.from}</span>
                                </div>
                                <div className="line">
                                    <span>To: </span> <span>{i.length === 0 ? "--" : i.to}</span>
                                </div>
                                <div className="line">
                                    <span>Ride type: </span> <span>{i.length === 0 ? "--" : i.type}</span>
                                </div>

                                <div className="line">
                                    <span>Pricing: </span> <span>K{i.length === 0 ? "--" : i.price}</span>
                                </div>
                                    </div>
                                )
                              }) : <span>No rides selected</span>}

                              <h3>Select payment method:</h3>
                              <div className="payments">
                                {payments.map((img, index) => {
                                return(
                                    <div 
                                    onClick={()=>setSet({name: img.name, bg: img.bg})}
                                    className="payment" key={index}>
                                        <img src={img.icon} alt="" />
                                        <span>{img.name}</span>
                                    </div>
                                )
                              })}
                              </div>
                        </div>
                        <button
                        type="submit"
                        style={set ? {background: `${set.bg}`} : {}}
                        className="confirm"
                        >{set.name ? `Confirm with ${set.name}` : "Confirm Payment"}</button>
        </form>

    </section>
    )
}