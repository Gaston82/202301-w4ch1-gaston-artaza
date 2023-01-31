import React from "react";
import { GentlemanStructure } from "../../types";

interface InfoProps {
  gentlemen: GentlemanStructure[];
}

const Info = ({ gentlemen }: InfoProps) => {
  const totalGentlemanSelected = gentlemen.filter(
    (gentleman) => gentleman.selected
  ).length;
  return (
    <section className="controls">
      <p className="info">{totalGentlemanSelected} gentlemen pointing at you</p>
    </section>
  );
};

export default Info;
