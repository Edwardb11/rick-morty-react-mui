import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Pagination,
} from "@mui/material";
import { CardComponent, HeaderComponent } from "../../components";
import { useEffect, useState } from "react";
import { characters } from "../../api/characters";
import { TypeCharacter } from "./interface/character.interface";

export const HomePage: React.FC<{}> = () => {
  const [allCharacters, setAllCharacters] = useState<TypeCharacter[] | null>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  useEffect(() => {
    setLoading(true);
    characters
      .getAll({ page })
      .then((r) => {
        setAllCharacters(r.data.results);
        setCount(r.data.info.pages);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [page]);
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
        <>
          <div>
            {allCharacters?.length !== 0 ? (
              <Grid sx={{ my: 2 }} container spacing={3} direction="row">
                {allCharacters!.map((character) => (
                  <Grid key={character.id} item xs={3}>
                    <CardComponent
                      id={character.id}
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
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Pagination
              variant="outlined"
              color="primary"
              count={count}
              page={page}
              onChange={handleChange}
              sx={{ mb: 3 }}
              size="large"
            />
          </Box>
        </>
      )}
    </Container>
  );
};
