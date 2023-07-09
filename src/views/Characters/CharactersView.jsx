import { Box, Grid } from "@mui/material";
import Card from "../../components/CharacterCard/CharacterCard";
import background from "../../assets/rickBg2.png";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function CharactersView({
  // Si no ponemos las llaves, se cree que es un objeto, no una función.
  characters,
  page,
  totalPages,
  onChange,
  onSearch,
  searchValue,
}) {
  return (
    // Este return es el de "YO SOLO PINTO" (solo hace eso).
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Box
        sx={{
          overflow: "scroll",
          maxHeight: "100vh",
        }}
      >
        <SearchBar onChange={onSearch} value={searchValue} />
        <Grid container spacing={3}>
          {characters?.results.map((character) => {
            const { name, image, id, location } = character;
            return (
              <Grid item xs={12} md={3} key={id}>
                <Card
                  name={name}
                  image={image}
                  id={id}
                  location={location.name}
                />
              </Grid>
            );
          })}
        </Grid>
        <Pagination totalPages={totalPages} page={page} onChange={onChange} />
      </Box>
    </Box>
  );
}

// NotaAgu: el interrogante detrás de "characters" (línea 11) indica:
// "Si existe "characters" entonces sigue leyendo. Si no existe, no hagas nada.
// También se podría meter toda esa llave en una ternaria, para que si aún no existe, muestre un mensaje como "Cargando...".
