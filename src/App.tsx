import React, { useState } from "react";
import "./App.css";
import Gentleman from "./components/Gentleman";
import { GentlemanStructure } from "./types";

const App = (): JSX.Element => {
  const [gentlemen] = useState<GentlemanStructure[]>([
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
      name: "The Farytale",
      status: "RIP",
      profession: "Influencer",
      twitter: "pending",
      picture: "fary.jpg",
      alternativeText: "The Fary pointing at you",
      selected: false,
    },
    {
      id: 3,
      name: "Julius Churchs",
      status: "Alive",
      profession: "Java developer",
      twitter: "@julius_churchs",
      picture: "julio.jpg",
      alternativeText: "Churchs pointing at you",
      selected: true,
    },
  ]);

  return (
    <>
      <header>
        <h1>The pointing gentlemen</h1>
      </header>
      <ul>
        {gentlemen.map((gentleman) => (
          <li key={gentleman.id}>
            <Gentleman gentleman={gentleman} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
