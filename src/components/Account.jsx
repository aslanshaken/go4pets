import Nav from "./Nav";
// import { Route } from "react-router-dom"
// import axios from "axios";
// import { baseURLUser, config } from "../services";
import { useEffect, useState } from "react";

function Account(props) {

    // GET
    // const [users, setUsers] = useState([]);
    // const [toggleFetch, setToggleFetch] = useState(false);

    // GET
    // useEffect(() => {

    //     const getItems = async () => {
    //         const resp = await axios.get(baseURLUser, config);
    //         setUsers(resp.data.records);
    //     };
    //     getItems();
    // }, []);


    // POST
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()



    const assignPerson = () => {
        props.users.map((user) => {
            setName(user.fields.name)
            setEmail(user.fields.email)
            setPhone(user.fields.phone)
        })
    }



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
                        <form  >
                            <h1>User Information</h1>
                            <div id="column-center" >
                                <label htmlFor="name" >Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div id="column-center" >
                                <label htmlFor="email" >Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div id="column-center" >
                                <label htmlFor="phone" >Phone</label>
                                <input
                                    name="phone"
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>

                            <div id="column-center" >
                                <button id="submitButton" type="submit" >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="searchRight" ></div>


            </div>

        </div>
    )
}
export default Account;