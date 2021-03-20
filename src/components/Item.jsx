import { useParams } from "react-router-dom";
import Nav from "./Nav";
import axios from "axios";
import { baseURL, config } from "../services";

function Item(props) {
    const params = useParams();

    const item = props.items.find(
        (item) => item.id === params.id
    );

    const handleDelete = async () => {
        const recordURL = `${baseURL}/${params.id}`
        await axios.delete(recordURL, config)
    }

    if (!item) {
        return (
            <div>
                <h4>Loading...</h4>
            </div>
        );
    }

    return (
        <div>
            <Nav />
            <h3 id="center">{item.fields.title} </h3>

            <div className="item-container" >
                <img id="itemImage" src={item.fields.image}   alt="item"/>
                <div className="showItem" >
                    <div id="itemDescription">Description: {item.fields.description}</div>
                    <div><h4><a href={item.fields.link}> Buy on Amazon </a></h4></div>
                    <div>Rating: {item.fields.rating}</div>
                    <div>Price: ${item.fields.price}</div>
                    <div><button onClick={handleDelete} > Delete </button></div>
                </div>

            </div>

        </div>
    )
}
export default Item