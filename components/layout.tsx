import React from "react";
import MainMenu from "./main-menu";
import Props from "./props";

function Layout(props: Props) {
  return (
    <div className="flex h-screen w-screen flex-row bg-white font-inter">
      <MainMenu />

      {props.children}
    </div>
  );
}

export default Layout;
