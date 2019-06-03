import React from 'react';
import formatType from '../Helper/FormatType'
import shortenString from '../Helper/ShortenString'

import * as moment from 'moment';


function PollCard({ poll }) {
    return (
        <div>
            <div>
                <p style={{ opacity: '.85' }}>
                    <b>{formatType(poll.type)}</b> ({moment(poll.startDate, "YYYY-MM-DD").format("MMMM Do")} to {moment(poll.endDate, "YYYY-MM-DD").format("MMMM Do")}
                    ) - <a href={poll.url} target="_blank">{shortenString(poll.pollster)}</a> <span style={{ opacity: '.25' }}>{poll.grade}</span>
                </p>
            </div>

            {poll.answers.map(answer => {
                return (
                    <div key={answer.choice}>
                        {answer.choice}: {answer.pct}
                    </div>
                )

            })}


        </div>
    )
}


export default PollCard;
