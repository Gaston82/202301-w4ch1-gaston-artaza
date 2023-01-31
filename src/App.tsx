import React, { useState } from "react";
import Gentleman from "./components/Gentleman/Gentleman";
import { GentlemanStructure } from "./types";
import "./components/Gentleman/Gentleman.css";
import Info from "./components/Info/Info";

const App = (): JSX.Element => {
  const [gentlemen, setGentlemen] = useState<GentlemanStructure[]>([
    {
      id: 1,
      name: "Bertin Osborne",
      status: "Alive",
      profession: "Youtuber",
      twitter: "@osbourne",
      picture: "bertin.jpg",
      alternativeText: "Osbourne pointing at you",
      selected: true,
    },
    {
      id: 2,
      name: "Fary",
      status: "RIP",
      profession: "Influencer",
      twitter: "pending",
      picture: "fary.jpg",
      alternativeText: "The Fary pointing at you",
      selected: false,
    },
    {
      id: 3,
      name: "Julio Churchs",
      status: "Alive",
      profession: "Java developer",
      twitter: "@julius_churchs",
      picture: "julio.jpg",
      alternativeText: "Churchs pointing at you",
      selected: true,
    },
  ]);

  const deleteGentlemanById = (id: number): void => {
    const gentlemenUpdated = gentlemen.filter((gentleman) => {
      return gentleman.id !== id;
    });
    setGentlemen(gentlemenUpdated);
  };

  return (
    <>
      <div className="container">
        <header className="main-header">
          <h1 className="main-title">The pointing gentlemen</h1>
        </header>
        <Info />
        <main className="main">
          <ul className="gentlemen">
            {gentlemen.map((gentleman) => (
              <li className="gentleman" key={gentleman.id}>
                <Gentleman
                  gentleman={gentleman}
                  onDelete={deleteGentlemanById}
                />
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
};

export default App;
