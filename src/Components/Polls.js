import React, { Component } from 'react'
import { Consumer } from '../context'


import PollRow from './PollRow'
import PollInfo from './PollPage'

class Polls extends Component {
    render() {
        return (
            <table class="table">
                <Consumer>


                    {value => {
                        const { polls } = value
                        if (polls === undefined || polls.length === 0) {
                            return (<p>Polls loading</p>)

                        } else {
                            return (
                                polls.map(poll => (
                                    <React.Fragment>

                                        <PollRow key={poll.id} poll={poll} />
                                        <br />

                                    </React.Fragment>

                                ))
                            )

                        }
                    }}
                </Consumer>
            </table>

        )
    }
}


export default Polls;
