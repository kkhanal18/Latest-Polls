import React, { useState, useEffect } from 'react';
// import { Consumer } from '../context'
import * as moment from 'moment';

import PollCard from './Components/PollCard'

function PollList() {

    const [polls, setPolls] = useState(null);
    const [filteredPolls, setfilteredPolls] = useState(polls)
    const [loading, setLoading] = useState(false);
    const url = 'https://projects.fivethirtyeight.com/polls/polls.json';
    const range = 30
    var dateRange = moment().subtract(range, 'days').calendar();

    async function fetchMyAPI() {
        let response = await fetch(url)
        const json = await response.json()
        var data = json.filter(e => Date.parse(e.endDate) >= Date.parse(dateRange))
        setPolls(data.reverse())
        setfilteredPolls(data)
        setLoading(true);

    }

    useEffect(() => {
        fetchMyAPI();
    }, [])

    if (!loading) {
        return ("Loading...")
    }

    function updateData(type) {
        if (type) {
            var filtered = polls.filter(e => e.type === type)
            setfilteredPolls(filtered)
        } else {
            setfilteredPolls(polls)
        }
    }

    return (
        <React.Fragment>

            {/* <button onClick={() => updateData()}>Show All</button>
            <button onClick={() => updateData("trump-approval")}>Trump Approval</button>
            <button onClick={() => updateData("president-primary-d")}>D Primary</button>
            <button onClick={() => updateData("president-primary-r")}>R Primary</button>
            <button onClick={() => updateData("generic-ballot")}>Generic Ballot</button>
            {
                filteredPolls && filteredPolls.map((poll) => (
                    <div key={poll.id}>
                        <PollCard poll={poll} />
                        <hr style={{ opacity: '.1' }} />
                    </div>

                ))
            } */}
        </React.Fragment>
    );
}

export default PollList;
