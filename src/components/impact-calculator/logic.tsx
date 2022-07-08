import React, { useState, useEffect } from "react";
const { io } = require("socket.io-client");
const socket = io(process.env.REACT_APP_SOCKET_URL);

const SearchExample = () => {
  const [searchData, setSearchData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [expandSearchBox, setExpandSearchBox] = useState(true);

  //This is will get a pre-fetched default list of token before a user starts typing
  useEffect(() => {
    if (!!socket && !searchTerm) {
      socket.emit("top-currencies");
      socket.on("top-currencies-result", (response: any) => {
        if (response && response["result"]) {
          setSearchData(response.result);
          setLoading(false);
        }
      });
    }
  }, [searchTerm]);

  //This will get tokens based on search term when the user starts typing
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (socket && !!searchTerm && searchTerm.length >= 2) {
        socket.emit("search-coin", { name: searchTerm });
        socket.on("search-coin-result", (response: any) => {
          if (response && response["result"]) {
            setSearchData(response.result);
            setLoading(false);
          }
        });
      }
    }, 250);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchData?.map((item, index) => {
        return <div>{item.name}</div>;
      })}
    </div>
  );
};

export default SearchExample;
