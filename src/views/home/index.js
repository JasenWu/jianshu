import React , { Component} from 'react';
//import Header from '../../common/header/index'
import {HomeWraper,HomeLeft,HomeRight,Banner} from './style'

import List from './components/List'
import Recomend from './components/Recomend'
import Topic from './components/Topic'

class Details extends Component{
    render(){
        return (<div>
               
                <HomeWraper>
                   <HomeLeft>
                        <Banner>
                            <img alt="" className="banner" src="https://yn-oa.oss-cn-shanghai.aliyuncs.com/test/banner.png" />
                     
                        </Banner>
                        <Topic></Topic>
                        <List></List>
                   </HomeLeft>
                   <HomeRight>
                        <Recomend></Recomend> 
                   </HomeRight>  
                </HomeWraper> 
            </div>
        )
        
        
       
    }
}

export default Details;