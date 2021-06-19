import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    // justifyContent:'center'
    placeItems:'center',
    width:'100vw'
   
  },
  loader:{
    color: "red",

}
}));

export default function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <CircularProgress className={classes.loader} size={80}/>
    </div>
  );
}
