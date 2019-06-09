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

            <div class="card mb-4">

                {/* <div class="body"> */}

                <h5 class="card-title">

                    <a className="type-link" href={`/polls/${poll.id}`}>
                        {type} | {created_at}
                    </a>
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">{pollster}</h6>


                {/* <content>{poll.state}</content> */}
                {console.log(poll.answers)}


                {poll.answers.sort(function (a, b) { return b.pct - a.pct }).map(answer => {
                    return (
                        // <ul class="list-group list-group-flush">
                        //     <li class="list-group-item">

                        //         <div key={answer.choice}>
                        //             {answer.choice}: {answer.pct}
                        //         </div>
                        //     </li>
                        // </ul>
                        <div key={answer.choice}>
                            {answer.choice}: {answer.pct}
                        </div>


                    )

                })}
            </div>

            {/* </div> */}

        </React.Fragment >
    )
}


export default PollRow;
