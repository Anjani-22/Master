import React from "react";
import hindiNumber from "./HindiNumbers";

export default function Age({ age, name, profession }) {
  if (age) return;
  console.log(age);
  const y = hindiNumber[age.years];
  const m = hindiNumber[age.months];
  const d = hindiNumber[age.dates];
  const h = hindiNumber[age.hours];

  //Vijay Deenanath Chauhan Poora naam, Baap Ka naam Deenanath Chauhan, Umar Chattis saal Nau mahina 8 din aur ye solwan ghanta chaalu hai hayee…

  return (
    age !== null && (
      <div className="name-age">
        <p>naam : ${name}</p>
        <p>profession: ${profession}</p>
        <p>{` Umar ${y} saal, ${m} mahina, ${d} din, aur ye ${h} ghanta chaalu hai hayee…`}</p>
      </div>
    )
  );
}
