import React,{Component} from 'react'
 
import {connect} from 'react-redux';
import {getList} from '../store/actionCreater'


class List extends Component{
    render(){
        
 
            return <div>1111</div>
           
         
    }
    componentDidMount(){
        this.props.getData();
    }

}

const mapState = (state)=>{
    return {
        articlList: state.get('HomePage').get('articlList')
    }
}
const mapDispatch = (dispatch)=>{
    return {
        getData(){
            const action = getList();
            dispatch(action);
        }
    }
}
export default connect(mapState,mapDispatch)(List);