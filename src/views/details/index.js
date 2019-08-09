import React , { Component} from 'react';
import { withRouter } from 'react-router-dom'
import Header from '../../common/header/index'
class Details extends Component{
    render(){
        return <div>
        <Header></Header>
            Details{this.props.match.params.id}
        </div>
    }
}


export default withRouter(Details);