import React, { Component } from 'react'
import { Consumer } from '../context'


import PollCard from './PollRow'
import PollInfo from './PollPage'

class Polls extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { polls } = value
                    if (polls === undefined || polls.length === 0) {
                        return (<p>Polls loading</p>)

                    } else {
                        return (
                            polls.map(poll => (
                                <React.Fragment>

                                    <PollCard key={poll.id} poll={poll} />
                                    <br />

                                    <a href={`/polls/${poll.id}`}>
                                        View More
                                    </a>
                                    <br />
                                    <hr align="left" className="line" />

                                </React.Fragment>

                            ))
                        )

                    }
                }}
            </Consumer>

        )
    }
}


export default Polls;
