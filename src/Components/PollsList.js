import React, { Component } from "react";
import { Consumer } from "../context";

import PollRow from "./PollRow";
import PollInfo from "./PollPage";

class PollList extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { polls } = value;
          if (polls === undefined || polls.length === 0) {
            return (
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            );
          } else {
            return polls.map(poll => (
              <React.Fragment>
                <PollRow key={poll.id} poll={poll} />
              </React.Fragment>
            ));
          }
        }}
      </Consumer>
    );
  }
}

export default PollList;
