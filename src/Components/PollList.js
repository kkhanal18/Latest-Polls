import React, { useState, useEffect } from 'react';
import * as moment from 'moment';

import PollCard from './PollCard'

function PollList() {

    const [polls, setPolls] = useState(null);
    const [loading, setLoading] = useState(false);
    const url = 'https://projects.fivethirtyeight.com/polls/polls.json';
    const range = 14
    var dateRange = moment().subtract(range, 'days').calendar();

    function titleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
        }
        return str.join(' ');
    }

    async function fetchMyAPI() {
        let response = await fetch(url)
        const json = await response.json()
        var data = json.filter(element => Date.parse(element.endDate) >= Date.parse(dateRange))
        setPolls(data)
        setLoading(true);
    }

    useEffect(() => {
        fetchMyAPI();
    }, [])

    if (!loading) {
        return ("Loading....")
    }

    return (
        <div className="polls">
            {
                polls && polls.map((poll) => (
                    <div key={poll.id}>
                        <PollCard poll={poll} />
                        <hr style={{ opacity: '.2' }} />
                    </div>

                ))
            }
        </div>
    );
}

export default PollList;
