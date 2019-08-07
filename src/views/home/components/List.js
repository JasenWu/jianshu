import React,{Component} from 'react'
import {ListItem ,ListInfo} from '../style'
import {connect} from 'react-redux';
import {getList} from '../store/actionCreater'


class List extends Component{

    render(){
            let {articlList} = this.props;
            {
              return  articlList.map((v,k)=>{
                    return (<ListItem key={k}>
                                <h3>{
                                    v.get('title')
                                }</h3>
                                <p>
                                {
                                    v.get('des')
                                }</p>
                            </ListItem>)
                })
            }
           
         
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