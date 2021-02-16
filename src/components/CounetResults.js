import React, {Component} from 'react'
import {connect} from 'react-redux';
class CounterResults extends Component{
      render(){
return(
    <div>
              results from redux state
             {this.props.count}
       </div>  
)
}
}
const mapStateToProps=(state)=>{
    return{
          count:state.counter
    }
}
export default connect(mapStateToProps)(CounterResults);