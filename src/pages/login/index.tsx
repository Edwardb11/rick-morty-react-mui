import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

export const LoginPage: React.FC<{}> = () => {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}>
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography variant="h4"  sx={{ mt: 1, mb: 1 }}>Iniciar Sesión</Typography>
            <Box component="form">
              <TextField margin="normal" fullWidth label="Email" sx={{ mt: 2, mb: 1.5 }} required />
              <TextField margin="normal"  fullWidth label="Password" sx={{ mt: 1.5, mb: 1.5 }} required />
              <Button fullWidth type="submit" variant="contained" sx={{ mt: 1.5, mb: 2 }} >
                Iniciar Sesión
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
