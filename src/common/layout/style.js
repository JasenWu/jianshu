import styled  from 'styled-components';

export const  Avatar = styled.div`
  position:absolute;
  right:10px;
  top:10px;
  width:40px;
  height:40px;
  border-radius:20px;
  border:1px solid red;

  img{
    vertical-align:top;
    height:100%;
    max-width:100%;
    border-radius:20px;
    background:red;
    cursor: pointer;
  }
`

export const Title = styled.div`
  font-size:36px;
  float:left;
`