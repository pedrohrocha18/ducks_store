import React from "react";
import Header from "./Header/Header";

function Container({ children }: any) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center w-[100%]">
        {children}
      </div>
      <div>Footer</div>
    </div>
  );
}

export default Container;
