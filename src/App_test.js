import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

////////////////////////////////////////////////////////////
// first our route components
function Sandwiches() {
  return <h2>Sandwiches</h2>;
}

function Tacos({ routes }) {
  return (
    <div>
      <h2>Tacos</h2>
      <ul>
        <li>
          <Link to="/tacos/bus">Bus</Link>
        </li>
        <li>
          <Link to="/tacos/cart">Cart</Link>
        </li>
      </ul>

      {routes.map((route, i) => (
         <Route
         path={route.path}
         key={i}
         render={props => (
             <div>{route.path}</div>
           // pass the sub-routes down to keep nesting
           //<route.component {...props} routes={route.routes} />
         )}
       />
        
      ))}
    </div>
  );
}

function Bus() {
  return <h3>Bus</h3>;
}

function Cart() {
  return <h3>Cart</h3>;
}

////////////////////////////////////////////////////////////
// then our route config
const routes = [
   
  {
    path: "/tacos",
    component: Tacos,
    routes: [
      {
        path: "/tacos/bus",
        component: Bus
      },
      {
        path: "/tacos/cart",
        component: Cart
      }
    ]
  }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
function RouteWithSubRoutes(route) {
    console.log('route',route);
  return (
    <Route
      path={route.path}
      render={props => (
          <div>{route.path}</div>
        // pass the sub-routes down to keep nesting
        //<route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function RouteConfigExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/tacos">Tacos</Link>
          </li>
         
        </ul>

        <br />

        <br />

        <br />

        {routes.map((route, i) => (
          
          <Route
            key={i}
            path={route.path}
            render={props => (
            
              // pass the sub-routes down to keep nesting
               <route.component {...props} routes={route.routes} />
            )}
          />
        ))}
      </div>
    </Router>
  );
}
export default RouteConfigExample;
