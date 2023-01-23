import { Box, Typography, Grid, Button } from '@mui/material';
import src from '../sources/main.png';
import logo from '../sources/undraw_job_hunt.svg';
const LandingPage = () => {
  return (
    <>
      {/* <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: 'background.default',
        }}
      > */}
      <Grid container direction="row">
        <Grid item xs={8}>
          {/* <Grid container direction="column" spacing={4}> */}
          <Grid item>
            <Box
              component="img"
              alt="logo"
              src={logo}
              sx={{
                width: '100px',
              }}
            ></Box>
          </Grid>
          <Grid item mt={8}>
            <Typography variant="h3"> Track my Job Applications App</Typography>
            <Typography variant="body" component="body">
              Doggo ipsum tungg very hand that feed shibe you are doing me the shock shibe snoot
              doggo much ruin diet, boofers long bois shoober fluffer much ruin diet. Shooberino
              boof very good spot puggo very taste wow, snoot you are doing me a frighten smol
              borking doggo with a long snoot for pats big ol pupper most angery pupper I have ever
              seen, smol borking doggo with a long snoot for pats very hand that feed shibe doggo.
            </Typography>
          </Grid>
          <Grid item mt={8}>
            <Button variant="contained" color="success" size="large">
              Login/Register
            </Button>
          </Grid>
        </Grid>
        {/* </Grid> */}
        <Grid item xs={4}>
          <Box component="img" alt="app main image" src={src} />
        </Grid>
      </Grid>
      {/* </Box> */}
    </>
  );
};

export default LandingPage;
