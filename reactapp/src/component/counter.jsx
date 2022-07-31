import React,{Component} from 'react'
class Coutner extends Component {
    state = { 
        count:this.props.counter.value,
        tags:['tag1','tag2','tag3']
     };
 handleIncrement=()=>{
this.setState({count:this.state.count+1});
 }
     rendertags(){

        if(this.state.tags.length===0) return<p> there are no tags</p>;
        return  <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>
           
    }
    render() {

        return (<div>
             <span className={this.getBadgeClasses()}>{this.formatCount()}</span> 
            <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button> 
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn -sm m-2'>Delete</button>
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