import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  IconButton,
  Badge,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { CartComponent } from "./Cart";
import { useState } from "react";
export const NavBar: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);

  const handleStateViewDrawer = () => {
    setOpen((state) => !state);
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky">
          <Toolbar>
            <Container maxWidth="xl">
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center">
                <Grid item>
                  {" "}
                  <Typography> Logo</Typography>{" "}
                </Grid>
                <Grid item>
                  <Stack direction="row" spacing={2}>
                    <IconButton
                      color="primary"
                      onClick={() => handleStateViewDrawer()}>
                      <Badge color="error" badgeContent={2}>
                        <ShoppingCartOutlinedIcon />
                      </Badge>
                    </IconButton>
                    <Button
                      variant="contained"
                      onClick={() => navigate("login")}>
                      Login
                    </Button>{" "}
                    <Button variant="outlined">Register</Button>{" "}
                  </Stack>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
        <CartComponent
          open={open}
          handleStateViewDrawer={handleStateViewDrawer}
        />
      </Box>
    </div>
  );
};
