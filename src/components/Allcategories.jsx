import { useState } from "react";
import Showallcategories from "./Showallcategories";

function Allcategories() {
    const [close, setClose] = useState(false)
    return (
        <div className="hamburgerMain" >
            <img onClick={() => setClose(!close)} id="hamburgerImg"
                alt="menu"
                src={close
                    ? "https://img.icons8.com/fluent-systems-filled/96/000000/x.png"
                    : "https://img.icons8.com/metro/104/000000/menu.png"
                }>
            </img>
            {close ? <Showallcategories /> : null}
        </div>
    )
}

export default Allcategories