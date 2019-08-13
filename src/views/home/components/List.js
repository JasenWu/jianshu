import React,{Component} from 'react'
 
import {connect} from 'react-redux';
import {getList} from '../store/actionCreater'


class List extends Component{
    render(){
        
            return (<div>
                        {
                            this.props.articlList.map((v,k)=>{
                                return (<div key={k}>

                                    <p>{v.get('title')}</p>
                                    <p>{v.get('url')}</p>
                                </div>)
                            })
                        }
                
                </div>)
           
         
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