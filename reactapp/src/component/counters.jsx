import React, { Component } from 'react';
import Coutner from './counter';
class Counters extends Component {
    state = { 
        counters:[
            {
                id:1,value:0
            },
            {
                id:2,value:0
            },
            {
                id:3,value:0
            },
            {
                id:4,value:0
            }
        ]
     } 
    render() { 
        return (
            <div>
                {this.state.counters.map(counter=><Coutner key={counter.id} value={counter.value} selected={true }/>)}
            </div>
        );
    }
}
 
export default Counters;