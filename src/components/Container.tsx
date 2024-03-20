import React from "react";
import Header from "./Header/Header";

function Container({ children }: any) {
  return (
    <div>
      <div>
        <Header />
      </div>
        <div className="bg_home">
      <div className="container">
        {children}
        </div>
      </div>
      <div>Footer</div>
    </div>
  );
}

export default Container;
