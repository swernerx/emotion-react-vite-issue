import { FunctionComponent } from 'react';
import { Grid, Container, Typography } from '@mui/material';

export interface LogoBannerProps {
  header: string;
  subtitle: string;
}

export const LogoBanner: FunctionComponent<LogoBannerProps> = (props: LogoBannerProps) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Container>
          <Typography color="textPrimary" variant="h2">
            {props.header}
          </Typography>
          <Typography color="textSecondary" paragraph={true} variant="subtitle1">
            {props.subtitle}
          </Typography>
        </Container>
      </Grid>
    </Grid>
  );
};
