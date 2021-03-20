import { Link } from "react-router-dom";

function AddforSale() {
    return (
        <Link to="/additem" >
            <button>
                <img id="addButton"  src="https://img.icons8.com/dusk/64/000000/add-image.png" alt="button"/>
            </button>
        </Link>
    )
}

export default AddforSale;