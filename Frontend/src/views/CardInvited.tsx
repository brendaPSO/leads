import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Snackbar,
  Typography,
} from "@mui/material";
import Perfil from "../shared/components/Perfil";
import Informations from "../shared/components/informations";
import acceptedLeds from "../services/AcceptionLeds";
import decliveLeds from "../services/DecliveLeds";

interface CardInvitedProps {
  jobId: number;
  firstName: string;
  suburb: string;
  category: string;
  descriptionJob: string;
  price: number;
  createdAt: string;
}

const CardInvited: React.FC<CardInvitedProps> = ({
  jobId,
  firstName,
  suburb,
  category,
  descriptionJob,
  price,
  createdAt,
}) => {

  return (
    <Card variant="outlined" sx={{ height: "100%" }}>
      <CardHeader
        titleTypographyProps={{ fontWeight: "bold", variant: "h6" }}
        subheaderTypographyProps={{ variant: "subtitle1" }}
        sx={{ height: "30%", alignItems: "flex-start" }}
      />
      <CardContent sx={{ height: "40%", alignItems: "flex-start" }}>
        <Perfil firstName={firstName} createdAt={createdAt}></Perfil>
        <Informations jobId={jobId} suburb={suburb} category={category}></Informations>
        <Typography variant="body1" fontWeight="normal" textAlign="left">
          {descriptionJob}
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={2}>
            <Button variant="contained" onClick={() => acceptedLeds(jobId, price).then()}>Accept</Button>
            <Snackbar message="Sucesso"></Snackbar>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" onClick={() => decliveLeds(jobId)}>Decline</Button>
          </Grid>
          <Grid item xs={2}>
          <Typography variant="body1" fontWeight="normal" textAlign="left">
            {price}
          </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardInvited;
