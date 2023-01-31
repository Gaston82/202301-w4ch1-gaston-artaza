import React from "react";
import { GentlemanStructure } from "../../types";
import "./Gentleman.css";

interface GentlemanProps {
  gentleman: GentlemanStructure;
  onDelete: (id: number) => void;
}

const Gentleman = ({ gentleman, onDelete }: GentlemanProps): JSX.Element => {
  const handleDeleteGentleman = (): void => {
    onDelete(gentleman.id);
  };

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
      <i className="icon gentleman__icon fas fa-check">v</i>

      <button className="button" onClick={handleDeleteGentleman}>
        <i className="icon gentleman__icon gentleman__icon--delete fas fa-times">
          x
        </i>
      </button>
    </>
  );
};

export default Gentleman;
