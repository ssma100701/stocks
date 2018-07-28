import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MyStockChart from './MyStockChart'
import axios from 'axios';

export default class Stock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stocks: []
        };
    }

    componentWillMount() {
        axios.get('api/stock').then(response => {
            this.setState({
                stocks: response.data
            });
        }).catch(errors => {
            console.log(errors);
        })
    }

    render() {
        return (
            <div className="container">
                <MyStockChart data={this.state.stocks}/>               
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Stock />, document.getElementById('example'));
}
