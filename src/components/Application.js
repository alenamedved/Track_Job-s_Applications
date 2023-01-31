import React from 'react';

import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Chip from '@mui/material/Chip';

const ExpandMore = styled((props) => {
  // eslint-disable-next-line no-unused-vars
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Application({ data }) {
  console.log(data);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={12} md={6}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          border: 'solid 8px #1a1919',
          borderRadius: '10px',
        }}
      >
        <CardHeader
          sx={{
            borderBottom: '2px solid gray',
          }}
          avatar={<Avatar aria-label="company">{data.company.slice(0, 1).toUpperCase()}</Avatar>}
          //   action={
          //     <IconButton aria-label="settings">
          //       <MoreVertIcon />
          //     </IconButton>
          //   }
          title={data.position}
          subheader={data.date}
        ></CardHeader>
        <CardContent sx={{ flex: 1 }}>
          <Grid container>
            <Grid item xs={6}>
              <Typography component="h2" variant="h5">
                {data.location}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {data.location}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1" paragraph>
                {data.status}
              </Typography>

              <Chip label={data.response.toUpperCase()}></Chip>
            </Grid>
          </Grid>
          <CardActions disableSpacing>
            <IconButton aria-label="edit" sx={{ mr: 6 }}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteForeverIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show notes"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{data.notes}</Typography>
            </CardContent>
          </Collapse>
        </CardContent>
      </Card>
    </Grid>
  );
}

Application.propTypes = {
  data: PropTypes.object,
};

export default Application;
