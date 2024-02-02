import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import Perfil from "../shared/components/Perfil";
import Informations from "../shared/components/informations";

interface CardAcceptedProps {
  jobId: number;
  firstName: string;
  lastName: string;
  suburb: string;
  category: string;
  descriptionJob: string;
  price: number;
  email: string;
  phoneNumber: string;
  createdAt: string;
}

const CardAccepted: React.FC<CardAcceptedProps> = ({
  jobId,
  firstName,
  lastName,
  suburb,
  category,
  descriptionJob,
  price,
  email,
  phoneNumber,
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
        <Perfil firstName={firstName} lastName={lastName} createdAt={createdAt}></Perfil>
        <Informations
          jobId={jobId}
          suburb={suburb}
          category={category}
          price={price}
        ></Informations>
        <Typography variant="body1" fontWeight="normal" textAlign="left">
          {descriptionJob}
        </Typography>
        <Typography variant="body1" fontWeight="normal" textAlign="left">
          {price}
        </Typography>
        <Typography variant="body1" fontWeight="normal" textAlign="left">
          {email} . {phoneNumber} . {lastName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardAccepted;
