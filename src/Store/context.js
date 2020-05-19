import React, { useState, useEffect, useReducer } from "react";
import * as moment from "moment";
import axios from "axios";

export const Context = React.createContext();

const url = "https://projects.fivethirtyeight.com/polls/polls.json";

export function Provider({ children }) {
  const [allPolls, setAllPolls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredPolls, setFilteredPolls] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");

  async function fetchPolls() {
    var dateRange = moment().subtract(30, "days").calendar();
    setIsLoading(true);
    await axios
      .get(url)
      .then((res) => {
        const data = res.data.reverse();
        setAllPolls(data);
        setFilteredPolls(data);
        setIsLoading(false);
      }, [])
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchPolls();
  }, []);

  return (
    <Context.Provider
      value={{
        allPolls,
        filteredPolls,
        isLoading,
        selectedFilter,
        setSelectedFilter,
        setFilteredPolls,
      }}
    >
      {children}
    </Context.Provider>
  );
}
