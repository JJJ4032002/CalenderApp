import React from "react";
import "./BannerImage.css";
export const BannerImage = ({ bannerImage }: { bannerImage: string }) => {
  return <img className="BannerImage" src={bannerImage} alt="Banner" />;
};
