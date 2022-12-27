import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";

export const CardComponent: React.FC<{}> = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h4" sx={{ mb: 1.5 }} color="text.secondary">
          Hello
        </Typography>
        <Divider />
        <Typography sx={{ mt: 1.5 }} variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained" size="small">
          Learn more
        </Button>
      </CardActions>
    </Card>
  );
};
