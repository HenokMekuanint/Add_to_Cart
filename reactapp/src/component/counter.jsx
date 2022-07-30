import React,{Component} from 'react'
class Coutner extends Component {
    state = { 
        count:0,
     };
     styles={
        fontSize:100,
        fontWeight:'bold'
     }
    render() {
          
        return (<div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className='btn btn-secondary btn-sm'>Increment</button>
            </div>);
    
    }
    getBadgeClasses() {
        let classes = "badg m-2 bg-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        return this.state.count===0?"zero":this.state.count;
    }
}
 
export default Coutner; 