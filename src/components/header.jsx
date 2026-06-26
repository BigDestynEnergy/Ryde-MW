import "../styles/header.css"

export default function Header(){
    return(
        <header>
            <h1>Ryde<span style={{color: "var(--orange)", cursor: "pointer"}}>MW</span></h1>

            <div className="ham">
                <span></span><span></span><span></span>
            </div>
        </header>
    )
}