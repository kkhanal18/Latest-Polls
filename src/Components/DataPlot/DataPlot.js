import React, { useContext } from "react";
import { Context } from "../../Store/context";
import "./DataPlot.css";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

import * as moment from "moment";

const PollList = () => {
  const { filteredPolls, isLoading } = useContext(Context);

  const optionOne = [];
  const optionTwo = [];

  const a = filteredPolls.forEach((poll) => {
    const date = new Date(poll.created_at);
    const formattedDate = moment(date).format("MMM YYYY");
    optionOne.push({ date: formattedDate, value: poll.answers[0].pct });
    optionTwo.push({ date: formattedDate, value: poll.answers[1].pct });
  });

  return (
    <div className="data-plot">
      <h2>Plot</h2>
      {/* <LineChart width={1200} height={600} data={optionOne}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" interval="preserveEnd" />
        <YAxis />
      </LineChart> */}
    </div>
  );
};

export default PollList;
