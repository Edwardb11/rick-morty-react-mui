import { Container, Button } from "@mui/material";
import { useNotification } from "../../context/notification.context";

export const HomePage: React.FC<{}> = () => {
  const { getError } = useNotification();
  const handleClik = () => {
    getError("Hola mundo");
  };
  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <Button onClick={handleClik} fullWidth variant="contained">
        Estamos en home
      </Button>
    </Container>
  );
};
