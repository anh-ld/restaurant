import React from "react";
import DetailsContainer from "../containers/DetailsContainer.js";
import Layout from "./Layout.jsx";
import Menu from "./Menu.jsx";

const Body = () => {
  return (
    <div className="body">
      <DetailsContainer />
      <Layout />
      <Menu />
    </div>
  );
};

export default Body;
