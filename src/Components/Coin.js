import React from "react";

const Coin = ({ coin, coinData }) => {
  return (
    <div className={`w-full px-4 py-6 border-white border-b-2`}>
      <div className="container flex items-center justify-between mx-auto font-bold text-white">
        <div className="flex items-center w-8 space-x-2 image">
          <img src={coin.image} alt="coinImage" className="w-full" />
          <h3 className="text-sm font-semibold text-white">{coin.name}</h3>
        </div>
        <div className="hidden uppercase lg:block symbol">
          <h3>{coin.symbol}</h3>
        </div>
        <div className="price">
          <h3>${coin.current_price}</h3>
        </div>
        <div className="items-center hidden space-x-2 font-bold md:flex lowHighPrice">
          <h3 className="text-green-600">{coin.high_24h}</h3>
          <h3 className="text-red-600">{coin.low_24h}</h3>
        </div>
        <div className="hidden volume sm:block">
          <h3>{coin.total_volume.toLocaleString()}</h3>
        </div>
        <div className="percentage">
          <h3
            className={` font-semibold ${
              coin.market_cap_change_percentage_24h < 0
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            {coin.market_cap_change_percentage_24h.toFixed(2)}%
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Coin;
