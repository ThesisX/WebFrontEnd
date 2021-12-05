import React from "react";
import { BrowserRouter } from "react-router-dom";

import TabbarPublic from "./Tabbar/TabbarPublic";
import AppbarPublic from "./AppbarPublic";

const RoutesPublic = () => {
  return (
    
    <BrowserRouter>
      <AppbarPublic />
      <TabbarPublic />
    </BrowserRouter>
  );
};

export default RoutesPublic;
