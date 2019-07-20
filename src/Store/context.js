import React, { useState, useEffect, useReducer } from "react";
import * as moment from "moment";
import axios from "axios";

export const Context = React.createContext();

const url = "https://projects.fivethirtyeight.com/polls/polls.json";

const initialState = {
  filteredPolls: []
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_ALL":
      return { filteredPolls: action.payload };
    case "SHOW_APPROVAL":
      return {
        filteredPolls: action.payload.filter(e => e.type === "trump-approval")
      };
    case "SHOW_DPRIMARY":
      return {
        filteredPolls: action.payload.filter(
          e => e.type === "president-primary-d"
        )
      };
    case "SHOW_GEN_ELECTION":
      return {
        filteredPolls: action.payload.filter(e => e.type === "generic-ballot")
      };

    default:
      return "state";
  }
};

// export const filterReducer = (state, action) => {
//   switch (action.type) {
//     case "SHOW_ALL":
//       return state.polls;
//     case "SHOW_APPROVAL":
//       return state.polls.filter(e => e.type === "trump-approval");
//     default:
//       return state.polls;
//   }
// };

export function Provider({ children }) {
  // let intialState = {
  //   polls: [],
  //   dispatch: action => this.setState(state => filterReducer(state, action))
  // };

  const [allPolls, setAllPolls] = useState([]);
  const [{ filteredPolls }, dispatch] = useReducer(filterReducer, initialState);

  useEffect(() => {
    var dateRange = moment()
      .subtract(7, "days")
      .calendar();

    axios
      .get(url)
      .then(res => {
        const data = res.data
          .filter(e => Date.parse(e.endDate) >= Date.parse(dateRange))
          .reverse();
        setAllPolls(data);
        dispatch({ type: "SHOW_ALL", payload: data });
      }, [])
      .catch(error => console.log(error));
  }, []);

  return (
    <Context.Provider value={{ filteredPolls, allPolls, dispatch }}>
      {children}
    </Context.Provider>
  );
}

// export const Consumer = Context.Consumer;
