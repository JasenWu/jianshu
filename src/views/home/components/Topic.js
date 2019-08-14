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
                                    <div className='left'>
                                        {v}
                                    </div>
                                    <div className='right'>
                                        <img alt="" src="https://yn-oa.oss-cn-shanghai.aliyuncs.com/test/image.jpeg" />
                                    </div>
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




export default connect(mapStateToProps,null)(Topic);