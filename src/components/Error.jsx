import React from "react";

const Error = ({ children = "Hay un error" }) => {
  return (
    <div className="py-3 text-red-700 bg-red-100 border-2 border-red-700 font-bold text-center uppercase">
      {children}
    </div>
  );
};

export default Error;
