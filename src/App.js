
import './App.css';
import { Route } from "react-router-dom"
import axios from "axios";
import { baseURL, baseURLUser, config } from "./services";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Showsearcheditem from "./components/Showsearcheditem";
import Item from "./components/Item";
import Pets from "./components/Pets";
// import Deals from "./components/Deals";
import Account from "./components/Account";
import AddItem from "./components/AddItem";




function App() {
  // one state for creatures
  const [items, setItems] = useState([]);
  const [users, setUsers] = useState([]);
  // one state for toggle
  const [toggleFetch, setToggleFetch] = useState(false);


  // get data from api when toggle changes
  useEffect(() => {

    // ITEMS
    const getItems = async () => {
      const resp = await axios.get(baseURL, config);
      setItems(resp.data.records);
    };
    getItems();

    // USER
    const getUsers = async () => {
      const resp = await axios.get(baseURLUser, config);
      setUsers(resp.data.records);
    };
    getUsers();
  }, [toggleFetch]);




  return (
    <div className="">

      <Route exact path="/">
        <Home items={items} setToggleFetch={setToggleFetch} />
      </Route>

      <Route path="/search/:value" >
        <Showsearcheditem items={items} />
      </Route>

      <Route path="/item/:id" >
        <Item items={items} />
      </Route>

      <Route path="/pets/:id">
        <Pets items={items} />
      </Route>

      {/* <Route path="/topDeals">
        <Deals items={items} />
      </Route > */}


      <Route path="/account">
        <Account newUser={users} />
      </Route >


      <Route path="/additem">
        <AddItem />
      </Route>




    </div >
  );
}

export default App;
