import React, { useContext } from "react";
import { Context } from "../../Store/context";
import "./PollsList.css";
import formatType from "../../Helper/FormatType";
import * as moment from "moment";

const PollList = () => {
  const { filteredPolls, isLoading } = useContext(Context);

  const hasData = filteredPolls.length > 0 ? true : false;

  var dateRange = moment().subtract(30, "days").calendar();

  const polls = filteredPolls.filter(
    (e) => Date.parse(e.endDate) >= Date.parse(dateRange)
  );

  const formatDate = (date) => {
    return moment(date).fromNow();
  };

  const handleShowMore = () => {
    console.log("clicked show more");
  };

  return (
    <div className="table-container">
      {hasData & !isLoading ? (
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Published</th>
              <th>Pollster</th>
              <th>Sample Size</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {polls.map((poll, index) => {
              return (
                <tr key={index}>
                  <td>
                    {formatType(poll.type)}{" "}
                    <div id="poll-state">{poll.state ? poll.state : ""}</div>
                  </td>
                  <td>{formatDate(poll.created_at)}</td>
                  <td>{poll.pollster}</td>
                  <td>{poll.sampleSize}</td>
                  <td>
                    {poll.answers.map((answer, index) => {
                      return (
                        <div key={index}>
                          {answer.choice} - {answer.pct}
                        </div>
                      );
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <></>
      )}
      <div className="show-more" onClick={handleShowMore}>
        Show more
      </div>
    </div>
  );

  // if (filteredPolls === undefined || filteredPolls.length === 0) {
  //   return (
  //     <div className="spinner-border" role="status">
  //       <span className="sr-only">Loading...</span>
  //     </div>
  //   );
  // } else {
  //   return filteredPolls.map((poll) => (
  //     <React.Fragment>
  //       <PollRow key={poll.id} poll={poll} />
  //     </React.Fragment>
  //   ));
  // }
};

export default PollList;
