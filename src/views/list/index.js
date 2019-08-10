import React , { Component} from 'react';
import { withRouter } from 'react-router-dom'
import Header from '../common/header/index'
class List extends Component{
    render(){
        return <div>
            List{this.props.match.params.id}
        </div>
    }
}


export default withRouter(List);