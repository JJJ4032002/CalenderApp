import React from "react";
import "./GridWrapper.css";
export const GridWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="GridWrapper">{children}</div>;
};
