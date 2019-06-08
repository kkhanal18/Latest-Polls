import React, { Component } from 'react'
import * as moment from 'moment';
import axios from "axios";

export const Context = React.createContext();

const url = 'https://projects.fivethirtyeight.com/polls/polls.json';

export class Provider extends Component {

    state = {
        polls: [],
        totalResults: 0
    }
    componentDidMount() {
        var dateRange = moment().subtract(7, 'days').calendar();

        axios
            .get(url)
            .then(res => {
                this.setState({
                    polls: res.data.filter(e => Date.parse(e.endDate) >= Date.parse(dateRange)).reverse()
                })
            })
            .catch(error => console.log(error))

    }
    render() {

        return (
            <Context.Provider value={this.state}>
                {console.log(this.state)}
                {this.props.children}
            </Context.Provider>

        )
    }
}

export const Consumer = Context.Consumer;



