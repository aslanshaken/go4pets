import { useState } from "react";
import Showallcategories from "./Showallcategories";

function Allcategories(params) {
    const [close, setClose] = useState(false)
    return (
        <div>
            <div className="hamburgerMain" >
                <form>
                    <button type="button" onClick={() => setClose(!close)}  >
                        {close
                            ? <img id="hamburgerImg" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png" />
                            : <img id="hamburgerImg" src="https://cdn3.iconfinder.com/data/icons/e-commerce-8/91/hamburger-512.png" />
                        }
                    </button>
                </form>
                {close ? <Showallcategories /> : null}
            </div>

        </div>
    )
}

export default Allcategories