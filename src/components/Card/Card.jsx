import { Link } from "react-router-dom";
import { Container, Box, Typography } from "@mui/material";
import { Card as CardMUI } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

export default function CharacterCard({ name, image, location, id }) {
  return (
    <>
      <Container>
        <Box mb={2}>
          <CardMUI sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 240 }} image={image} title={name} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ubicación: {location}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="outlined" color="secondary" fullWidth>
                <Link to={`${id}`}>Detalles (foto)</Link>
              </Button>
            </CardActions>
          </CardMUI>
        </Box>
      </Container>
    </>
  );
}
