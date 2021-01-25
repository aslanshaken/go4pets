import {Link} from "react-router-dom";

function AddforSale(params) {
    return (
        <div className="addButtonLocation" >
            <div> 
                <form>
                    <Link to="/additem" >
                    <button>
                        <img id="addButton" src="https://img.icons8.com/doodle/96/000000/plus--v1.png" />
                    </button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default AddforSale;