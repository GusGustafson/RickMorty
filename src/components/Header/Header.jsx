import { Container } from "@mui/material";

export default function Header() {
  return (
    <>
      <Container maxWidth="sm">
        <h2>Lista de personajes de Rick & Morty</h2>
        <h4>
          Info de la API: <a href="https://rickandmortyapi.com/">INFO</a>
        </h4>
      </Container>
    </>
  );
}

// En el HEADER de la aplicación de Nacho, hay, entre otros elementos de menú, la opción "Logout", que funciona perfectamente.
// Podrías mirar esa parte de su componente y tratar de hacer tú un botón de Logout en tu header.