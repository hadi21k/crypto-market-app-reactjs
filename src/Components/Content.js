import React from "react";
import Coin from "./Coin";

const Content = ({ coinData }) => {
  return (
    <div className="mt-6 overflow-x-hidden xl:px-32">
      <div className="container mx-auto">
        {coinData.map((coin, index) => {
          return <Coin coin={coin} coinData={coinData} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Content;
