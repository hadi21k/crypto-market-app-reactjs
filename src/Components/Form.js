import React, { useRef, useEffect, useContext, useState } from "react";
import { SearchText } from "./context";

const Form = ({ filterSearchText }) => {
  const [text, setText] = useState("");
  const { setSearchText } = useContext(SearchText);
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    setSearchText(text);
  };
  return (
    <div className="flex flex-col items-center py-12">
      <div className="py-4 text-3xl font-bold text-white title">
        <h3>Search a currency</h3>
      </div>
      <form onSubmit={onSubmit}>
        <div className="relative mt-2">
          <span className="absolute inset-0 w-full h-full bg-pink-700 rounded-lg filter blur"></span>
          <input
            ref={inputRef}
            className="relative px-2 py-3 text-sm font-semibold text-white placeholder-white border-0 rounded-lg outline-none w-72 bg-gradient-to-r from-pink-600 to-purple-700"
            type="text"
            placeholder="Search"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
