import React, { Component } from 'react'

import { Consumer } from '../context'

import PollCard from './PollCard'

class Polls extends Component {
    render() {
        console.log("in polls component")
        return (
            <Consumer>
                {value => {
                    const { polls } = value

                    console.log(polls)

                    if (polls === undefined || polls.length === 0) {
                        return (<p>Polls loading</p>)

                    } else {
                        polls.map(poll => {
                            const current = poll.create_at
                            const next = poll.create_at

                            if (Date.parse(next) > Date.parse(current)) {

                                return (
                                    <div>
                                        <h1>{poll.create_at}</h1>
                                        <PollCard key={poll.id} poll={poll} />

                                    </div>

                                )

                            }
                            return (
                                <div>
                                    <h1>test</h1>
                                    <PollCard key={poll.id} poll={poll} />
                                </div>

                            )




                        })




                        // return (
                        //     polls.map(poll => (
                        //         <React.Fragment>
                        //             <PollCard key={poll.id} poll={poll} />
                        //             <hr style={{ opacity: '.1' }} />
                        //         </React.Fragment>

                        //     ))
                        // )

                    }
                }}
            </Consumer>

        )
    }
}


export default Polls;
