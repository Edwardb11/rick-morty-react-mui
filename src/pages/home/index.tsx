import { Box, Button, CircularProgress, Container, Grid } from "@mui/material";
import { CardComponent, HeaderComponent } from "../../components";
import { useEffect, useState } from "react";
import { characters } from "../../api/characters";
import { TypeCharacter } from "./interface/character.interface";

export const HomePage: React.FC<{}> = () => {
  const [allCharacters, setAllCharacters] = useState<TypeCharacter[] | null>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    characters
      .getAll({ page: 1 })
      .then((r) => {
        setAllCharacters(r.data.results);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <HeaderComponent
        title="Hola mundo"
        description="Esta pagina esta hecha con MUI"
        element={
          <Button variant="contained" fullWidth>
            Hola
          </Button>
        }
      />

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <div>
          {allCharacters?.length !== 0 ? (
            <Grid sx={{my:2}} container spacing={3} direction="row">
              {allCharacters!.map((character) => (
                <Grid item xs={3}>
                  <CardComponent
                    key={character.id}
                    image={character.image}
                    name={character.name}
                    species={character.species}
                    status={character.status}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            "No data"
          )}
        </div>
      )}
    </Container>
  );
};
