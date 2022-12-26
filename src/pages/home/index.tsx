import { Button, Container } from "@mui/material";
import { HeaderComponent } from "../../components";
import { useEffect } from "react";
import { characters } from "../../api/characters";

export const HomePage: React.FC<{}> = () => {
  useEffect(() => {
    characters
      .getById({id:1})
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
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
    </Container>
  );
};
