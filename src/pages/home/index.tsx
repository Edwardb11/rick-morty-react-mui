import { Button, Container, Grid } from "@mui/material";
import { CardComponent, HeaderComponent } from "../../components";
import { useEffect, useState } from "react";
import { characters } from "../../api/characters";
import { TypeCharacter } from "./interface/character.interface";

export const HomePage: React.FC<{}> = () => {
  const [allCharacters, setAllCharacters] = useState<TypeCharacter[] | null>(
    []
  );

  useEffect(() => {
    characters
      .getAll({ page: 1 })
      .then((r) => {
        setAllCharacters(r.data.results);
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
      <div>
        {allCharacters?.length !== 0 ? (
          <Grid container spacing={3} direction="row">
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
          ""
        )}
      </div>
    </Container>
  );
};
