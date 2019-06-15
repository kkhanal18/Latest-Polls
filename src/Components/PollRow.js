import React from "react";
import formatType from "../Helper/FormatType";
import shortenString from "../Helper/ShortenString";

import * as moment from "moment";

const PollRow = props => {
  const { poll } = props;
  const type = formatType(poll.type);
  const created_at = moment(poll.created_at, "YYYYMM-DD").format("MMMM Do");
  const pollster = shortenString(poll.pollster);

  const answers = poll.answers.sort(function(a, b) {
    return b.pct - a.pct;
  });

  const diff = parseInt(answers[0].pct) - parseInt(answers[1].pct);

  return (
    <div className="card mb-4">
      <h5 className="card-title">
        <a href={`/polls/${poll.id}`} className="type-link">
          {type} | {created_at}
        </a>
      </h5>
      <h6 className="card-subtitle mb-2 text-muted">{pollster}</h6>

      {answers.map((answer, index) => {
        if (answer === answers[0]) {
          return (
            <div key={index}>
              {answer.choice} - {parseInt(answer.pct)} (+{diff})
            </div>
          );
        } else {
          return (
            <div key={answer.choice}>
              {answer.choice} - {parseInt(answer.pct)}
            </div>
          );
        }
      })}
    </div>
  );
};

export default PollRow;
