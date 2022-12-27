import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { characters } from "../../api/characters";
import { ICharacter } from "./interfaces/character.interface";
import {
  Box,
  Container,
  Grid,
  CircularProgress,
  Typography,
  Divider,
  Chip,
} from "@mui/material";

export const CharacterPage: React.FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState<ICharacter | null>(null);

  useEffect(() => {
    characters
      .getById({ id })
      .then((result) => {
        setLoading(false);
        setCharacter(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <Box sx={{ width: "100%" }}>
      <Container maxWidth="xl">
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid sx={{ mt: 2 }} container columnSpacing={2}>
            <Grid item xs={6}>
              <Typography variant="h1">{character!.name}</Typography>
              <Divider />
              <Typography sx={{ mt: 2 }} variant="h6">
                {character!.origin.name}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Chip
                  color="primary"
                  variant="outlined"
                  label={character!.status}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <img
                src={character!.image}
                style={{ width: "100%", borderRadius: "0.5em" }}
                alt="No hay imagen"
              />
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};
