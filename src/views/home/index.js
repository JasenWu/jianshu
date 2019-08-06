import React , { Component} from 'react';
import Header from '../../common/header/index'
import {HomeWraper,HomeLeft,HomeRight} from './style'

import List from './components/List'
import Recomend from './components/Recomend'
import Topic from './components/Topic'

class Details extends Component{
    render(){
        return (
            <div>
                <Header></Header>
                <HomeWraper>
                   <HomeLeft>
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