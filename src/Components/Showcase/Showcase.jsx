import React from "react";
import { ShowcaseWrapper } from "./Showcase.css";

const Showcase = ({ children, height, bg_image, justify, align }) => {
  return (
    <ShowcaseWrapper
      className={`text-white d-flex flex-column justify-content-${
        justify || "center"
      } align-items-${align}`}
      bg_image={
        bg_image || require("../../Assets/pexels-artempodrez-6585028.jpg")
      }
      height={height || "20vh"}
    >
      {children}
    </ShowcaseWrapper>
  );
};

export default Showcase;
