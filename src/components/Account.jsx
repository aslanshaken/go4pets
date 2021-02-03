import Nav from "./Nav";
import { Route } from "react-router-dom"
import axios from "axios";
import { baseURLUser, config } from "../services";
import { useEffect, useState } from "react";

function Account(props) {

    // POST
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()


    const handleSubmit = async (e) => {
        e.preventDefault();

        const fields = {
            name,
            email,
            phone,
        };
        await axios.put(baseURLUser, { fields }, config);
        // props.setToggleFetch((prev) => !prev);
    };


    console.log(name)
    console.log(email)
    console.log(phone)


    return (
        <div>
            <Nav />
            <div className="searchRow">
                <div className="searchLeft" > </div>
                <div>
                    <div className="formCenter" >
                        {props.newUser.map((user) => {
                            
                            return (
                                <form onSubmit={handleSubmit} >
                                    <h1>User Information</h1>
                                    <div id="column-center" >
                                        <label htmlFor="name" >Name</label>
                                        <input
                                            name="name"
                                            type="text"
                                            value={user.fields.name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>

                                    <div id="column-center" >
                                        <label htmlFor="email" >Email</label>
                                        <input
                                            name="email"
                                            type="email"
                                            value={user.fields.email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div id="column-center" >
                                        <label htmlFor="phone" >Phone</label>
                                        <input
                                            name="phone"
                                            type="text"
                                            value={user.fields.phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>

                                    <div id="column-center" >
                                        <button id="submitButton" type="submit" >Submit</button>
                                    </div>
                                </form>
                            )
                        })}
                    </div>
                </div>

                <div className="searchRight" ></div>


            </div>

        </div>
    )
}
export default Account;