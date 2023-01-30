import React from "react";
import { GentlemanStructure } from "../../types";
import "./Gentleman.css";

interface GentlemanProps {
  gentleman: GentlemanStructure;
}

const Gentleman = ({ gentleman }: GentlemanProps): JSX.Element => {
  return (
    <>
      <article className="gentleman__data-container">
        <h2 className="gentleman__name">{gentleman.name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">
              Profession:{gentleman.profession}
            </span>
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">
              Status:{gentleman.status}
            </span>
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">
              Twitter:{gentleman.twitter}
            </span>
          </li>
        </ul>
        <span className="gentleman__data-label">{gentleman.status}</span>
        <span className="gentleman__data-label">{gentleman.twitter}</span>
      </article>
    </>
  );
};

export default Gentleman;
