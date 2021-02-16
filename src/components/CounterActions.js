import React, {Component} from 'react'
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';

class CounterActions extends Component{
      render(){
return(
    <div>
       <Button variant="success" onClick={this.props.onIncCounter}>inc</Button>
       <Button variant="warning" onClick={this.props.onDecCounter}>dec</Button>
       <Button variant="danger" onClick={this.props.onAddCounter}>add</Button> 
       <Button variant="info" onClick={this.props.onSubCounter}>sub</Button>
       </div>
)
}
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onIncCounter : ()=>dispatch({type:'INC_COUNTER'}),
        onDecCounter : ()=>dispatch({type:'DEC_COUNTER'}),
        onAddCounter : ()=>dispatch({type:'ADD_COUNTER',value:5}),
        onSubCounter : ()=>dispatch({type:'SUB_COUNTER',value:5})
    }
}
export default connect(null,mapDispatchToProps)(CounterActions);