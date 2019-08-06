import React from 'react';

 import store from './store/index'
 import { Provider } from 'react-redux'
 import { BrowserRouter , Route } from 'react-router-dom';

 import 'antd/dist/antd.css';
 import Home from './views/home/index'
 import Details from './views/details/index'

 


function App() {
  return (
    <Provider store={store}>
     
      <BrowserRouter>
        <div>
            <Route path='/' exact   component={Home}>
            </Route>
            <Route path='/details' component={Details} >
            </Route>
        </div>
      </BrowserRouter>
      
       {
        /*
          <Button  type="primary" >btn</Button>
       <Alert message="Success Text" type="success" />
        */
       }
    </Provider>

  );
}

export default App;
