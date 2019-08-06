import React,{Component} from 'react'
import {TopicWraper,TopicItem} from '../style'
import {connect} from 'react-redux';
class Topic extends Component{
    

    render(){
        const  {list} = this.props;
        return (
            <div>
                <TopicWraper>
                    {
                        list.map((v,k)=>{
                            return (
                                <TopicItem key={k}>
                                    <div className='left'>{v}</div>
                                    <div className='right'>itemtext</div>
                                </TopicItem>
                            )
                        })
                    }
                    
                </TopicWraper>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        list:state.getIn(['HomePage','list'])
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Topic);