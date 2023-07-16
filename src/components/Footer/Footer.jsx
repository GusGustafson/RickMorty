import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <>
      <Container>
      <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            FOOTER
          </Typography>
      </Container>
    </>
  );
}
