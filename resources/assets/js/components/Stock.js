import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MyStockChart from './MyStockChart'
import axios from 'axios';
import _ from 'lodash';

export default class Stock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stocks: []
        };
    }

    componentWillMount() {
        // get data from database
        axios.get('api/stock').then(response => {
            this.setState({
                stocks: response.data
            });
        }).catch(errors => {
            console.log(errors);
        })
    }

    calMaxProfit () {
        let low; // buy date
        let high; // sell date
        let benefit = [low, high, 0];
        const data = this.state.stocks;
        for(var i = 0; i< data.length - 1; i++) {
            /* for each decrease period, find the lowest price and calculate the max profit of this decerease period */
            if(data[i].value < data[i+1].value)
            {
                low = data[i];   
                high = data[i+1];   
                for(var j = i+1; j < data.length - 1; j++) {
                    if(data[j].value > high.value) {
                        high = data[j];;
                    }
                }
            }  
            /* find out the max profit from each decrease period */
            if(low && high) // while low and high element are not undefined
            {
                let profit = high.value - low.value;
                if(profit > benefit[2])
                    benefit.splice(0,3,low,high,profit);
            }
            
        }
        return benefit;
    }

    maxProfitPeriod() {
        const profitData = [...this.state.stocks];
        const period = this.calMaxProfit();
        // set up the max profit period
        _.remove(profitData, (d) => {
            return (d.date < period[0].date || d.date > period[1].date);
        })
        return profitData;
    }
    

    render() {
        return (
            <div className="container">
                <MyStockChart data={this.state.stocks} maxProfit={this.maxProfitPeriod()}/>               
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Stock />, document.getElementById('example'));
}
