import React from "react";
import { GentlemanStructure } from "../types";

interface GentlemanProps {
  gentleman: GentlemanStructure;
}

const Gentleman = ({ gentleman }: GentlemanProps) => {
  return (
    <article>
      <h2>{gentleman.name}</h2>
      <span>{gentleman.profession}</span>
      <span>{gentleman.status}</span>
      <span>{gentleman.twitter}</span>
    </article>
  );
};

export default Gentleman;
