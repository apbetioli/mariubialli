import PropTypes from "prop-types";
import React from "react";

export default function ScrollTo(props) {
  const { children } = props;

  const handleClick = () => {
    const anchor = document.querySelector(props.target);

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  };

  return (
    <div onClick={handleClick} role="presentation" {...props}>
      {children}
    </div>
  );
}

ScrollTo.propTypes = {
  target: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
