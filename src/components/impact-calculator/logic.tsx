import React, { useState, useEffect } from "react";
const { io } = require("socket.io-client");
const socket = io("https://dev-backend.sonarplatform.io");

const SearchExample = () => {
  const [searchData, setSearchData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [expandSearchBox, setExpandSearchBox] = useState(true);

  const handleInputChange = async (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let value = e.target.value.trim();
    setSearchTerm(value);
    setLoading(true);
  };

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

  // console.log({ searchData });

  return (
    <div>
      <section>
        <input
          type="search"
          id="tokenSearch"
          name="tokenSearch"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          autoComplete="off"
          style={{
            width: "100%",
            height: "50px",
          }}
        />
      </section>
      <section>
        {searchData?.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                height: "50px",
                backgroundColor: "orange",
                borderBottom: "1px solid black",
                color: "black",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => console.log(item)}
            >
              <span>
                {index + 1}.&nbsp;{item.name}&nbsp;({item.symbol.toUpperCase()})
              </span>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default SearchExample;
