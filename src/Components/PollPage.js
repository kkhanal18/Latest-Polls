import React, { Component } from 'react'
import { Consumer } from '../context'


class PollPage extends Component {

    pollId = this.props.match.params.id
    render() {

        return (
            <Consumer>
                {value => {
                    const { polls } = value
                    console.log(Array.isArray(polls))


                    if (polls === undefined || polls.length === 0) {
                        return (<p>Page loading</p>)
                    } else {
                        var poll = polls.find(x => x.id === this.props.match.params.id)
                        return (



                            // polls.map(poll => (




                            // ))

                            <React.Fragment>


                                <p>{poll.type}</p>
                                <p>{poll.created_at}</p>
                                <p>{poll.endDate}</p>
                                <p>{poll.grade}</p>
                                <p>{poll.id}</p>
                                <p>{poll.pollster}</p>
                                <p>{poll.population}</p>
                                <p>{poll.sampleSize}</p>
                                <p>{poll.seat_name}</p>
                                <p>{poll.startDate}</p>
                                <p>{poll.subgroup}</p>
                                <p>{poll.url}</p>
                            </React.Fragment>

                        )

                    }



                }}

            </Consumer>

        )
    }
}

export default PollPage;


