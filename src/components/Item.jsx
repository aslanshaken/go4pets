import { useParams } from "react-router-dom";
import Nav from "./Nav";

function Item(props) {
    const params = useParams();
    const item = props.items.find(
        (item) => item.id === params.id
    );

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

            <div className="searchRow">
                <div className="searchLeft" > LEFT </div>
                <div className="searchMiddle" >

                    <div className="showSearchItem" >
                        <div> <img id="itemImage" src={item.fields.image} /></div>
                        <div><p>-------------------------------------------</p> </div>
                        <div id="searchTitle" >{item.fields.title} </div>
                        <div>Rating: {item.fields.rating}</div>
                        <div>Price: ${item.fields.price}</div>
                        <div id="itemDescription">Description: {item.fields.description}</div>
                        <div><h4><a href={item.fields.link}> Buy on Amazon </a></h4></div>
                                
                    </div>

                </div>

                <div className="searchRight" > RIGHT </div>


            </div>

        </div>
    )
}
export default Item