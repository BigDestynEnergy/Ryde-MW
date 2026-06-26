import "../styles/menu.css"
import house from "../assets/house.svg"
import housefill from "../assets/house-fill.svg"
import wallet from "../assets/wallet.svg"
import walletfill from "../assets/wallet-fill.svg"
import pin from "../assets/pin.svg"
import pinfill from "../assets/pin-fill.svg"
import person from "../assets/person.svg"
import personfill from "../assets/person-fill.svg"
import { NavLink } from "react-router-dom"

export default function Menu(){
    const tabs = [
        {name: "Home", path: "/", icon: house, click: housefill},
        {name: "Checkout", path: "checkout", icon: wallet, click: walletfill},
        {name: "Track", path: "track", icon: pin, click: pinfill},
        {name: "Profile", path: "profile", icon: person, click: personfill},
    ]
    return(
        <main className="menu">
        <div className="tube">
             {tabs.map((tab, index) => (
                <NavLink 
                    key={index} 
                    to={tab.path}
                    className={({isActive}) => isActive ? 'tab active' : 'tab'}
                >
                    {({isActive}) => (
                        <>
                          <span>{tab.name}</span>
                          <img 
                            className={isActive ? "active" : {}}
                            src={isActive ? tab.click : tab.icon} 
                            alt={tab.name} 
                          />
                        </>
                    )}
                </NavLink>
             ))}
           </div>
        </main>
    )
}