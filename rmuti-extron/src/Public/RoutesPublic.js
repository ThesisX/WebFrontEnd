import React from "react";
import {
  BrowserRouter
} from "react-router-dom";

import TabbarPublic from "./Tabbar/TabbarPublic";

const RoutesPublic = () => {
  return (
    <BrowserRouter>
      <TabbarPublic />
    </BrowserRouter>
  );
};

export default RoutesPublic