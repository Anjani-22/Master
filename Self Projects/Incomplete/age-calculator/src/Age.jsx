import React from "react";
import hindiNumber from "./HindiNumbers";

export default function Age({ age, name, profession }) {
  if (age === null) return <div></div>;
  console.log("in age.jsx " + { ...age });
  const y = hindiNumber[age.years];
  const m = hindiNumber[age.months];
  const d = hindiNumber[age.days];
  const h = hindiNumber[age.hours];

  //Vijay Deenanath Chauhan Poora naam, Baap Ka naam Deenanath Chauhan, Umar Chattis saal Nau mahina 8 din aur ye solwan ghanta chaalu hai hayee…

  return (
    age !== null && (
      <div className="name-age">
        <p>
          naam.....<span>{name}</span>,
        </p>
        <p>
          profession.....<span>{profession}</span>,
        </p>
        <p>
          Umar <span>{y} saal</span>,<span>{m} mahina,</span>
          <span>{d} din,</span>
          <span>aur ye {h} ghanta chaalu hai hayee…. 😎</span>
        </p>
      </div>
    )
  );
}
