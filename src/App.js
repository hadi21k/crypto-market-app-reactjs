import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Content from "./Components/Content";
import { SearchText } from "./Components/context";
import Form from "./Components/Form";

const App = () => {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false";
  const [searchText, setSearchText] = useState("");
  const [coinData, setCoinData] = useState([]);
  useEffect(() => {
    const getCoinData = async () => {
      await axios
        .get(url)
        .then((res) => {
          setCoinData(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getCoinData();
  }, []);
  const filterSearchText = coinData.filter((coin) => {
    return coin.name.toLowerCase().includes(searchText.toLowerCase());
  });
  return (
    <SearchText.Provider value={{ searchText, setSearchText }}>
      <div className="min-h-screen overflow-x-hidden bg-gray-900 ">
        <Form filterSearchText={filterSearchText} />
        <Content coinData={filterSearchText} />
      </div>
    </SearchText.Provider>
  );
};

export default App;
