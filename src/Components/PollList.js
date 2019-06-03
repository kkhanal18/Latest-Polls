import React, { useState, useEffect } from 'react';
import * as moment from 'moment';

import PollCard from './PollCard'

function PollList() {
    console.log("rending..")

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

    function showTrumpApproval() {
        var filtered = polls.filter(e => e.type === "trump-approval")
        setfilteredPolls(filtered)
    }


    function showAll() {
        setfilteredPolls(polls)
    }


    function showDPrimary() {
        var filtered = polls.filter(e => e.type === "president-primary-d")
        setfilteredPolls(filtered)
    }


    function showRPrimary() {
        var filtered = polls.filter(e => e.type === "president-primary-r")
        setfilteredPolls(filtered)
    }


    function showGeneric() {
        var filtered = polls.filter(e => e.type === "generic-ballot")
        setfilteredPolls(filtered)
    }

    return (
        <div className="polls">
            <button onClick={() => showAll()}>Show All</button>
            <button onClick={() => showTrumpApproval()}>Trump Approval</button>
            <button onClick={() => showDPrimary()}>D Primary</button>
            <button onClick={() => showRPrimary()}>R Primary</button>
            <button onClick={() => showGeneric()}>Generic Ballot</button>



            {
                filteredPolls && filteredPolls.map((poll) => (
                    <div key={poll.id}>
                        <PollCard poll={poll} />
                        <hr style={{ opacity: '.1' }} />
                    </div>

                ))
            }
        </div>

    );
}

export default PollList;
