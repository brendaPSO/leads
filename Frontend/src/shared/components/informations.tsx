import { Grid, Typography } from "@mui/material";

interface InformationsProps {
  jobId: number;
  suburb: string;
  category: string;
  price?: number;
}

const Informations: React.FC<InformationsProps> = ({
  suburb,
  category,
  jobId,
  price,
}) => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={2}>
        <Typography variant="body1" fontWeight="normal" textAlign="left">
          {suburb}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body1" fontWeight="normal" textAlign="left">
          {category}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body1" fontWeight="normal" textAlign="left">
          {jobId}
        </Typography>
      </Grid>
      {price != null && (
        <Grid item xs={2}>
          <Typography variant="body1" fontWeight="normal" textAlign="left">
            {price}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default Informations;
