import React from "react";
import CatIcon from "./icons/CatIcon";
import DogIcon from "./icons/DogIcon";
import HumanIcon from "./icons/HumanIcon";
import BirdIcon from "./icons/BirdIcon";

const StanIcon = (props) => {
  if (props.name === "cat") return <CatIcon />;
  if (props.name === "dog") return <DogIcon />;
  if (props.name === "human") return <HumanIcon />;
  if (props.name === "bird") return <BirdIcon />;
};

export default StanIcon;