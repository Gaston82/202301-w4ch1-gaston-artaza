import React, { useState } from "react";
import "./App.css";
import { Gentleman } from "./types";

const App = (): JSX.Element => {
  const [gentlemen] = useState<Gentleman[]>([
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
          <li>
            <article>
              <h2>{gentleman.name}</h2>
              <span>{gentleman.profession}</span>
              <span>{gentleman.status}</span>
              <span>{gentleman.twitter}</span>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
