import {Link } from "react-router-dom";

function Logo(props) {
    return (
        <div className="logoMain" >
            <Link to="/" id="removeUnder" >
            <div id="logoText" >Go4Pets</div>
            </Link>
        </div>
    )
}

export default Logo;