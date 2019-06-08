import React from 'react';
import formatType from '../Helper/FormatType'
import shortenString from '../Helper/ShortenString'

import * as moment from 'moment';

const PollCard = (props) => {

    const { poll } = props
    const type = formatType(poll.type)
    const startDate = moment(poll.startDate, "YYYY-MM-DD").format("MMMM Do")
    const endDate = moment(poll.endDate, "YYYY-MM-DD").format("MMMM Do")
    const created_at = moment(poll.created_at, "YYYY-MM-DD").format("MMMM Do")
    const pollster = shortenString(poll.pollster)

    return (
        <React.Fragment>
            <div>
                <b>{type}</b>{" "}{created_at}{" "}

                <br />
                <content>{poll.state}</content>
            </div>
            <br />


            {poll.answers.map(answer => {
                return (
                    <div>
                        <div key={answer.choice}>
                            {answer.choice}: {answer.pct}
                        </div>

                    </div>

                )

            })}
            <br />

            <content className="pollster">{pollster}</content>
        </React.Fragment>
    )
}


export default PollCard;
