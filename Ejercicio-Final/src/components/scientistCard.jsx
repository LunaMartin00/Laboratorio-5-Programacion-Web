/* eslint-disable react/prop-types */
import React from "react";

export default function ScientistCard({ name, image, profesion, premios, descubrio }) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={image} alt={name} className="card-img" />
        <h3>{name}</h3>
      </div>
      <ul>
        <li><b>Profesión:</b> {profesion}</li>
        <li><b>Premios:</b> {premios}</li>
        <li><b>Descubrió:</b> {descubrio}</li>
      </ul>
    </div>
  );
}
