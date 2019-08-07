import styled  from 'styled-components';

export const HomeWraper = styled.div`

    width:960px;
    display:flex;
    margin:0 auto;
    margin-top:10px;
`

export const HomeLeft = styled.div`
    width:625px;
    margin-right: 10px;
`

export const HomeRight = styled.div`
    width:245px;
`

export const Banner = styled.div`
    width:100%;
    height:200px;
    overflow:hidden;
    .banner{
        max-width:100%;
    }
`

export const TopicWraper = styled.div`
    padding:20px  0;
    display:flex;

`

export const TopicItem = styled.div`
    flex:1;
    overflow:hidden;
    display:flex;
    border:0.5px solid #ccc;
    

    .left{
        width:70%;
        
    }
    .right{
        margin-left:5%;
        width:25%;
        img{
            width:100%;
            height:50px;
        }
    }
`

export const ListItem = styled.div`
    

`

export const ListInfo = styled.div`

`