import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import Nav from "./Nav";

function AddItem(props) {
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState(1)
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [animal, setAnimal] = useState("")
    const [link, setLink] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        const fields = {
            title,
            rating,
            price,
            image,
            description,
            animal,
            link,
        };
        await axios.put(baseURL, { fields }, config);
        // props.setToggleFetch((prev) => !prev);
    };

    return (
        <div>
            <Nav />
            <div className="formCenter" >
                
                <form onSubmit={handleSubmit} className="form-container" >
                    <h1>Post an Item for Sale</h1>

                    <div id="column-center" >
                        <label htmlFor="title" >Title </label>
                        <input
                            name="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div id="column-center" >
                        <label htmlFor="description">Description </label>
                        <textarea
                            name="description"
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div id="column-center" >
                        <label htmlFor="imageUrl">Image Url </label>
                        <input
                            name="imageUrl"
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </div>

                    <div id="column-center" >
                        <label htmlFor="rating">Rating </label>
                        <input
                            name="rating"
                            type="number"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        />
                    </div>

                    <div id="column-center" >
                        <label htmlFor="price">Price </label>
                        <input
                            name="price"
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div id="column-center" >
                        <label htmlFor="animal">Type of Pet </label>
                        <input
                            name="animal"
                            type="text"
                            value={animal}
                            onChange={(e) => setAnimal(e.target.value)}
                        />
                    </div>

                    <div id="column-center" >
                        <label htmlFor="link">Link to Origin Seller </label>
                        <input
                            name="link"
                            type="text"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </div>

                    <div id="column-center" >
                        <button id="submitButton" type="submit" >Submit</button>
                    </div>

                </form>

            </div>

        </div>

    )
}

export default AddItem