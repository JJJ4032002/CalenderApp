import React from "react";
import "./FormWrapper.css";
export const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="FormWrapper">{children}</div>;
};
