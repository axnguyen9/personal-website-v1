import React from "react";
import { Typography } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const useStyles = makeStyles((theme) => ({
  navBar: {
    height: '20vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid black',
  },
  logo: {
    height: '100%',
    border: '1px solid black',
  },
}));

export default function NavBar() {
  const classes = useStyles();
  return(
    <div className={classes.navBar}>
      <Link to="/" className={classes.logo}>
        <img src={logo} className={classes.logo}/>
      </Link>
      <Typography variant='button'>About</Typography>
    </div>
  );
}