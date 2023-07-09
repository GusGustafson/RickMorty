import { useEffect, useState } from "react";
import CharactersView from "./CharactersView";

export default function Characters() {
  // Aquí va toda la lógica (llamadas a API, cálculos...)
  const [characters, setCharacters] = useState(null);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  function handleChange(event, value) {
    // Esta función es la que hace que se cambie de página al hacer clic en los botones correspondientes.
    setPage(value);
  }

  function onSearchCharacter(e) {
    // Esta función es la que hace que funcione el buscador de la SearchBar.
    setSearchValue(e.target.value);
  }

  useEffect(
    function () {
      // De aquí salen los characters, que se los pasamos a la vista del return.
      async function fetchData() {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchValue}`
        );
        const data = await response.json();
        setCharacters(data);
      }

      fetchData();
    },
    [page, searchValue]
  );
  // Estos corchetes de arriba los ponemos vacíos en otros hooks useEffect que llevan fetch sin "parámetros $" para evitar
  // que se ejecute ese useEffect en todos y cada uno de los render que haga con el setCharacters.

  return (
    <CharactersView
      characters={characters}
      page={page}
      totalPages={characters?.info.pages}
      onChange={handleChange}
      onSearch={onSearchCharacter}
      searchValue={searchValue}
    />
  );
}
