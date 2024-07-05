import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {

  const petsMap = pets.map((pet) => {
    return <Pet pet={pet} key={pet.id} onAdoptPet={onAdoptPet}/>
  })
  return <div className="ui cards">{petsMap}</div>
}

export default PetBrowser;