import { useParams } from "react-router-dom";
import CharacterDetailsView from "./CharacterDetailsView";
import { useEffect, useState } from "react";

export default function CharacterDetails() {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(
    function () {
      async function fetchData() {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const data = await response.json();
        setCharacter(data);
      }

      fetchData();
    },
    [id]
  );

  return <CharacterDetailsView character={character} />;
}
