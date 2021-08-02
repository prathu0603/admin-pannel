import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import Cards from "./Cards/Cards";
import Chart from "./Charts/Chart";
import Skills from "./Skills/Skills";

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.home}>
        <Typography variant="h4">DASHBOARD</Typography>
        <Cards />
        <Chart />
        <Skills />
      </div>
    </div>
  );
};

export default Home;
