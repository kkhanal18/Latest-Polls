import React from 'react';
import formatType from '../Helper/FormatType'
import shortenString from '../Helper/ShortenString'

import * as moment from 'moment';

const PollRow = (props) => {

    const { poll } = props
    const type = formatType(poll.type)
    const created_at = moment(poll.created_at, "YYYY-MM-DD").format("MMMM Do")
    const pollster = shortenString(poll.pollster)

    return (
        <React.Fragment>

            <div>

                <a className="type-link" href={`/polls/${poll.id}`}> <b>{type}
                </b>{" "}{created_at}{" "}
                    <content>{pollster}</content></a>

            </div>
            <content>{poll.state}</content>

            <br />



            {poll.answers.map(answer => {
                return (
                    <div key={answer.choice}>
                        {answer.choice}: {answer.pct}
                    </div>


                )

            })}

        </React.Fragment>
    )
}


export default PollRow;
