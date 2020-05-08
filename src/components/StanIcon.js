import React from "react";
import cat from "../icons/cat.svg";
import dog from "../icons/dog.svg";
import human from "../icons/human.svg";
import bird from "../icons/bird.svg";

const StanIcon = (props) => {
  if (props.name === "cat") return <img src={cat} />;
  if (props.name === "dog") return <img src={dog} />;
  if (props.name === "human") return <img src={human} alt="Human Icon" />;
  if (props.name === "bird") return <img src={bird} alt="Bird Icon" />;
  return "";
};

export default StanIcon;
