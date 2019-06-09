import React, { useState, useEffect } from "react";
import * as moment from "moment";
import axios from "axios";

export const Context = React.createContext();

const url = "https://projects.fivethirtyeight.com/polls/polls.json";

export function Provider({ children }) {
  let intialState = {
    polls: [],
    totalResults: 0
  };

  const [state, setState] = useState(intialState);

  useEffect(() => {
    var dateRange = moment()
      .subtract(7, "days")
      .calendar();

    axios
      .get(url)
      .then(res => {
        setState({
          polls: res.data
            .filter(e => Date.parse(e.endDate) >= Date.parse(dateRange))
            .reverse()
        });
      }, [])
      .catch(error => console.log(error));
  }, []);
  return (
    <Context.Provider value={[state, setState]}>
      {console.log("returning from context.js provider")}
      {children}
    </Context.Provider>
  );
}

// export const Consumer = Context.Consumer;
