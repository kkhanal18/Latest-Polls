import React, { useContext } from "react";
import { Context } from "../Store/context";

// import formatType from "../Helper/FormatType";
// import shortenString from "../Helper/ShortenString";

export const backButton = () => {
  return (
    <a href="/" className="btn btn-dark" role="button">
      Back
    </a>
  );
};

const PollPage = props => {
  const { filteredPolls } = useContext(Context);
  // const { polls } = state;
  if (filteredPolls === undefined || filteredPolls.length === 0) {
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  } else {
    var poll = filteredPolls.find(x => x.id === props.match.params.id);

    const {
      created_at,
      // endDate,
      grade,
      // id,
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
          Population: {population} <br />
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
