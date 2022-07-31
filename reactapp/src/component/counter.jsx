import React,{Component} from 'react'
class Coutner extends Component {
    state = { 
        value:this.props.value,
        tags:['tag1','tag2','tag3']
     };
 handleelement=()=>{
this.setState({value:this.state.value+1});
 }
     rendertags(){

        if(this.state.tags.length===0) return<p> there are no tags</p>;
        return  <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>
           
    }
    render() {

        return (<div>
             <span className={this.getBadgeClasses()}>{this.formatCount()}</span> 
            <button onClick={this.handleelement} className='btn btn-secondary btn-sm'>Increment</button> 
            {this.state.tags.length===0 && "please create a new tag"}
                {this.rendertags()}
            </div>);
    
    }
    getBadgeClasses() {
        let classes = "badg m-2 bg-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        return this.state.value===0?"zero":this.state.value;
    }
}
 
export default Coutner; 