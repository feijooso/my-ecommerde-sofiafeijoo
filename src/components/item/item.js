import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ItemCount from '../itemCount/itemCount';
import { Button } from '@material-ui/core';
import {Link} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
  },
  media: {
    height: 240,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const path = "./item/"+props.planta.id;

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <Link to={path}>
        <CardMedia
            className={classes.media}
            image= {props.planta.img}
            title={props.planta.title}
          />
      </Link>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.planta.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.planta.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ItemCount stock={props.planta.stock}/>
        
      </CardActions>
    </Card>
  );
}