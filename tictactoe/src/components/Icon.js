import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle className="button" />;
    case "cross":
      return <FaTimes className="button" />;
    default:
      return <FaPen className="button" />;
  }
};

export default Icon;
