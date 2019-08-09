import React from 'react';

 import store from './store/index'
 import { Provider } from 'react-redux'
 import { BrowserRouter , Route } from 'react-router-dom';

 import 'antd/dist/antd.css';

 import { defaultRouter } from './router'
 import { renderRoutes } from "react-router-config";




function App() {
  return (
    <Provider store={store}>
     
      <BrowserRouter>
       
              {renderRoutes(defaultRouter)}
    
      </BrowserRouter>
       
    </Provider>

  );
}

export default App;
