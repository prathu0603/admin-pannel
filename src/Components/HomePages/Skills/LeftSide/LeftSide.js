import React from "react";
import {
  LinearProgress,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Box,
} from "@material-ui/core";

import {
  blue,
  lightBlue,
  green,
  red,
  grey,
  yellow,
} from "@material-ui/core/colors";

import useStyles from "./style";

const LeftSide = () => {
  const classes = useStyles();

  return (
    <div className={classes.leftSide}>
      <Card className={classes.projects}>
        <Typography variant="h5">Projects</Typography>
        <CardContent className={classes.progress}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="button">Server Migration</Typography>
            <Typography variant="button">20%</Typography>
          </div>
          <LinearProgress
            value={20}
            variant="determinate"
            className={classes.LinearProgress}
          />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="button">Sales Tracking</Typography>
            <Typography variant="button">40%</Typography>
          </div>
          <LinearProgress
            value={40}
            variant="determinate"
            className={classes.LinearProgress}
          />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="button">Customer DB</Typography>
            <Typography variant="button">60%</Typography>
          </div>
          <LinearProgress
            value={60}
            variant="determinate"
            className={classes.LinearProgress}
          />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="button">Payout Details</Typography>
            <Typography variant="button">80%</Typography>
          </div>
          <LinearProgress
            value={80}
            variant="determinate"
            className={classes.LinearProgress}
          />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="button">Account Setup</Typography>
            <Typography variant="button">Complete!</Typography>
          </div>
          <LinearProgress
            value={100}
            variant="determinate"
            className={classes.LinearProgress}
          />
        </CardContent>
      </Card>

      <div className={classes.colorPaletteContainer}>
        <div className={classes.colorContainer}>
          <div className={classes.colorBox} style={{ background: blue[800] }}>
            <Typography variant="h6">Primary</Typography>
            <Typography variant="subtitle2">blue[800]</Typography>
          </div>
          <div className={classes.colorBox} style={{ background: green[800] }}>
            <Typography variant="h6">Success</Typography>
            <Typography variant="subtitle2">green[800]</Typography>
          </div>
        </div>

        <div className={classes.colorContainer}>
          <div
            className={classes.colorBox}
            style={{ background: lightBlue[400] }}
          >
            <Typography variant="h6">Info</Typography>
            <Typography variant="subtitle2">lightBlue[400]</Typography>
          </div>
          <div className={classes.colorBox} style={{ background: yellow[600] }}>
            <Typography variant="h6">Warning</Typography>
            <Typography variant="subtitle2">yellow[600]</Typography>
          </div>
        </div>

        <div className={classes.colorContainer}>
          <div className={classes.colorBox} style={{ background: red[600] }}>
            <Typography variant="h6">Danger</Typography>
            <Typography variant="subtitle2">red[600]</Typography>
          </div>
          <div className={classes.colorBox} style={{ background: grey[600] }}>
            <Typography variant="h6">Secondary</Typography>
            <Typography variant="subtitle2">grey[600]</Typography>
          </div>
        </div>

        <div className={classes.colorContainer}>
          <div className={classes.colorBox} style={{ background: grey[50] }}>
            <Typography variant="h6">light</Typography>
            <Typography variant="subtitle2">grey[50]</Typography>
          </div>
          <div className={classes.colorBox} style={{ background: grey[800] }}>
            <Typography variant="h6">Dark</Typography>
            <Typography variant="subtitle2">grey[800]</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
