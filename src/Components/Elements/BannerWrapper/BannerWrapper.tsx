import React from "react";
import "./BannerWrapper.css";
export const BannerWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="BannerWrapper">{children}</div>;
};
