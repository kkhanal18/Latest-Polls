import React, { useContext } from "react";
import { Context } from "../context";
import { Link } from "react-router-dom";

import formatType from "../Helper/FormatType";
import shortenString from "../Helper/ShortenString";

export const backButton = () => {
  return (
    <a href="/" class="btn btn-dark" role="button">
      Back
    </a>
  );
};

const PollPage = props => {
  const [state] = useContext(Context);
  const { polls } = state;
  if (polls === undefined || polls.length === 0) {
    return (
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  } else {
    var poll = polls.find(x => x.id === props.match.params.id);

    const {
      created_at,
      endDate,
      grade,
      id,
      population,
      pollster,
      sampleSize,
      seat_name,
      startDate,
      subgroup,
      type,
      url
    } = poll;

    return (
      <div>
        <p>{backButton()}</p>
        <p>
          Created at: {created_at} <br />
          Type: {type} <br />
          Grade: {grade} <br />
          Pollster: {pollster} <br />
          Sample size: {sampleSize} <br />
          Seat name: {seat_name} <br />
          Start date: {startDate} <br />
          Subgroup: {subgroup} <br />
          Type: {type} <br />
          <a href={url}>View source</a>
        </p>
      </div>
    );
  }
};

export default PollPage;
