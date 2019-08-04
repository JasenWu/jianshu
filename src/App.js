import React from 'react';
 import Header from './common/header/index'
 import store from './store/index'
 import { Provider } from 'react-redux'
 import 'antd/dist/antd.css';
 
 import { Button , Alert } from 'antd';
function App() {
  return (
    <Provider store={store}>
       <Header></Header>
       <Button  type="primary" >btn</Button>
       <Alert message="Success Text" type="success" />
    </Provider>

  );
}

export default App;
