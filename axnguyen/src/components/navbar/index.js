import React from "react";
import { Typography } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Link } from "react-router-dom";
import logo from "../../assets/sig.png";

const useStyles = makeStyles((theme) => ({
  navBar: {
    height: '20vh',
    margin: '0 5%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: '100%',
  },
  about: {
    color: '#32161F',
    textDecoration: 'none',
  },
}));

export default function NavBar() {
  const classes = useStyles();
  return(
    <div className={classes.navBar}>
      <Link to="/" className={classes.logo}>
        <img src={logo} className={classes.logo}/>
      </Link>
      <Typography className={classes.about} variant='button' component={Link} to={"/about"}>
          About
      </Typography>
    </div>
  );
}