import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./App";
import GroupSelect from "./views/groupSelect/GroupSelect";

const Router = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { GroupSelect }  path="/groupSelect" exact />
       </BrowserRouter>
   )
}

export default Router;