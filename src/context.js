import React, { Component } from 'react'
import * as moment from 'moment';


const url = 'https://projects.fivethirtyeight.com/polls/polls.json';
const range = 30
var dateRange = moment().subtract(range, 'days').calendar();



class Provider extends Component {

    // state = {
    //     polls: polls
    // }

    componentDidMount() {
        let response = fetch(url)
        const json = response.son()
        var polls = json.filter(e => Date.parse(e.endDate) >= Date.parse(dateRange)).reverse
        return polls

    }

    // let response = await fetch(url)
    // const json = await response.json()
    // var data = json.filter(e => Date.parse(e.endDate) >= Date.parse(dateRange))
    // setPolls(data.reverse())
    // setfilteredPolls(data)
    // setLoading(true);



    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Provider;
