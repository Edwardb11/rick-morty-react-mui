import { Button, Container } from "@mui/material";
import { HeaderComponent } from "../../components";

export const HomePage: React.FC<{}> = () => {
  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <HeaderComponent
        title="Hola mundo"
        description="Esta pagina esta hecha con MUI"
        element={<Button variant="contained" fullWidth>Hola</Button>}
      />
    </Container>
  );
};
