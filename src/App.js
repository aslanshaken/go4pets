
import './App.css';
import { Route } from "react-router-dom"
import axios from "axios";
import { baseURL, config } from "./services";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Showsearcheditem from "./components/Showsearcheditem";





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




    </div>
  );
}

export default App;
