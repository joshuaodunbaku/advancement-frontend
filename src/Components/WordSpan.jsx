import React from "react";

const BUTTON_COLOR = {
  lightBlue: "#3c4ef5",
  gold: "#f9d20a",
  goldishBrown: "#f78419",
  darkBrown: "#593d0b",
};
const WordSpan = ({ color, children, bold, ...otherProps }) => {
  return (
    <span
      className="bolder fw-bolder"
      style={{
        color: `${BUTTON_COLOR[color] || BUTTON_COLOR[color || "goldishBrown"]}`,
        fontWeight: bold && "bold",
      }}
      {...otherProps}
    >
      {children}
    </span>
  );
};

export default WordSpan;
