import React, { Component } from 'react'
import { Consumer } from '../context'
import { Link } from 'react-router-dom';


import formatType from '../Helper/FormatType'
import shortenString from '../Helper/ShortenString'

export const backButton = () => {
    return (
        <a href="/" class="btn btn-dark" role="button">Back</a>
    )

}


class PollPage extends Component {

    pollId = this.props.match.params.id
    render() {

        return (

            <Consumer>

                {value => {

                    const { polls } = value
                    console.log(Array.isArray(polls))


                    if (polls === undefined || polls.length === 0) {
                        return (
                            <React.Fragment>
                                <p>
                                    {backButton()}

                                </p>
                                <div class="spinner-border" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </React.Fragment>
                        )
                    } else {
                        var poll = polls.find(x => x.id === this.props.match.params.id)
                        return (

                            <React.Fragment>

                                <p>
                                    {backButton()}
                                </p>

                                <p><b>Poll Type</b> {formatType(poll.type)}</p>
                                <p><b>Create</b>  {poll.created_at}</p>
                                <p><b>End date</b>  {poll.endDate}</p>
                                <p><b>Pollster grade</b>  {poll.grade}</p>
                                <p><b>Id</b>  {poll.id}</p>
                                <p><b>Pollster</b> {poll.pollster}</p>
                                <p><b>Population</b> {poll.population}</p>
                                <p><b>Sample size</b> {poll.sampleSize}</p>
                                <p><b>Seat name</b>  {poll.seat_name}</p>
                                <p><b>Start date</b>  {poll.startDate}</p>
                                <p><b>Subgroup</b> {poll.subgroup}</p>
                                <a href={poll.url}> View source</a>



                            </React.Fragment>

                        )

                    }



                }}


            </Consumer>

        )
    }
}

export default PollPage;


