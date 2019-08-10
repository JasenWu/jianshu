import React from 'react';
import Loadable from 'react-loadable';
 

const LoadableComponent = Loadable({
  loader: (props) => import('../../views/details/index'),
  loading: ()=>{
      return <div>loading </div>
  },
});

export default (name)=> {
  console.log('name',name);
  return ()=>{
    return (<LoadableComponent name={name} />)
  }
  
};
 