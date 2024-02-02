import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';

const BaseLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      height="100%"
      width="100%"
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundPositionY: 'bottom',
        backgroundSize: matchesSM ? 'contain' : 'cover',
        backgroundColor: '#f7f8f8',
      }}
    >
      <Grid container item xs={11}>
          {children}
      </Grid>
    </Grid>
  );
};

export default BaseLayout;
