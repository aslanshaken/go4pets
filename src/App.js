
import './App.css';
import { Route } from "react-router-dom"
import axios from "axios";
import { baseURL, config } from "./services";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Showsearcheditem from "./components/Showsearcheditem";
import Item from "./components/Item";
import Dogs from "./components/Dogs";
import Cats from "./components/Cats";
import Fish from "./components/Fish";
import Birds from "./components/Birds";
import Deals from "./components/Deals";
import Account from "./components/Account";
import AddItem from "./components/AddItem";




function App() {
  // one state for creatures
  const [items, setItems] = useState([]);
  // one state for toggle
  const [toggleFetch, setToggleFetch] = useState(false);


  // get data from api when toggle changes
  useEffect(() => {
    const getItems = async () => {
      const resp = await axios.get(baseURL, config);
      setItems(resp.data.records);
    };
    getItems();
    // console.log(items)
  }, []);




  return (
    <div className="">

      <Route exact path="/">
        <Home items={items} />
      </Route>

      <Route path="/search/:value" >
        <Showsearcheditem items={items} />
      </Route>

      <Route path="/item/:id" >
        <Item items={items} />
      </Route>

      <Route path="/dogs">
        <Dogs items={items} />
      </Route>

      <Route path="/cats">
        <Cats items={items} />
      </Route >

      <Route path="/fish">
        <Fish items={items} />
      </Route >

      <Route path="/birds">
        <Birds items={items} />
      </Route >

      <Route path="/topDeals">
        <Deals items={items}/>
      </Route >

      <Route path="/account">
        <Account />
      </Route >
      
      <Route path="/additem">
        <AddItem />
      </Route>




    </div >
  );
}

export default App;
