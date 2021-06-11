import React from "react"; //default import
import {render} from "react-dom"; //name import
import {Provider} from "react-redux";

import store from "./app/State/Store";
import App from "./app/app";
// import 'semantic-ui-css/semantic.min.css';

render(
      
       
        <Provider store={store}>
        <App/>
        </Provider>,
         
    
      
    document.getElementById("root") //bootstrapping the application root container
)

