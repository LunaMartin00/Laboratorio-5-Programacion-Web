import React from "react";
import ScientistCard from "./components/scientistCard";
import { scientists } from "./data/scientists";
import "./index.css";

export default function App() {
  return (
    <div className="container">
      <h1>Científicos Notables</h1>
      <div className="cards-container">
        {scientists.map((s) => (
          <ScientistCard
            key={s.id}
            name={s.name}
            image={s.image}
            profesion={s.profesion}
            premios={s.premios}
            descubrio={s.descubrio}
          />
        ))}
      </div>
    </div>
  );
}
