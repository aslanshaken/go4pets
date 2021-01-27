import { useState } from "react";
import Showallcategories from "./Showallcategories";

function Allcategories(params) {
    const [close, setClose] = useState(false)
    return (
        <div>
            <div className="hamburgerMain" >

                <img onClick={() => setClose(!close)} id="hamburgerImg"
                    src={close
                        ? "https://cdn0.iconfinder.com/data/icons/controls-and-navigation-arrows-3/24/146-512.png"
                        : "https://img.icons8.com/metro/26/000000/menu.png"
                    }>
                </img>

                {close ? <Showallcategories /> : null}
            </div>

        </div>
    )
}

export default Allcategories