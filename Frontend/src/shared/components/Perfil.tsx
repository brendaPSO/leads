import { Grid, Stack, Avatar, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

interface PerfilProps {
  firstName: string;
  lastName?: string;
  createdAt: string;
}

const Perfil: React.FC<PerfilProps> = ({ firstName, lastName, createdAt }) => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={1}>
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        </Stack>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h5" fontWeight="bold" textAlign="left">
          {firstName} {lastName}
        </Typography>
        <Typography variant="body1" fontWeight="normal" textAlign="left">
          {createdAt}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Perfil;
