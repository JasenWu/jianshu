import styled  from 'styled-components';

export const HomeWraper = styled.div`
    width:960px;
    display:flex;
    margin:0 auto;
`

export const HomeLeft = styled.div`
    width:625px;
`

export const HomeRight = styled.div`
    width:245px;
`

export const TopicWraper = styled.div`
    padding:20px 10px 0 0;

`

export const TopicItem = styled.div`
    width:250px;
    overflow:hidden;
    display:flex;
    border:1px solid #ccc;
    .left{
        width:30%;
    }
    .right{
        width:70%;
    }
`