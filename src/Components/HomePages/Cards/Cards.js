import React from "react";
import useStyles from "./style";
import { Grid, Card, Typography } from "@material-ui/core";
import { blue, grey, green, teal, yellow } from "@material-ui/core/colors";
import {
  EventNote,
  AccountBalanceWallet,
  Assignment,
  Forum,
} from "@material-ui/icons";

function Cards() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.cards}
    >
      <Card
        className={classes.card}
        style={{ borderLeft: "solid #2196f3 0.4rem" }}
      >
        <div>
          <Typography variant="body1" style={{ color: blue[500] }}>
            Earning (Monthly)
          </Typography>
          <Typography variant="h5" style={{ color: grey[600] }}>
            $ 44,000
          </Typography>
        </div>
        <div>
          <EventNote className={classes.cardIcon} />
        </div>
      </Card>

      <Card
        className={classes.card}
        style={{ borderLeft: "solid #66bb6a 0.4rem" }}
      >
        <div>
          <Typography variant="body1" style={{ color: green[400] }}>
            Earning (Monthly)
          </Typography>
          <Typography variant="h5" style={{ color: grey[600] }}>
            $ 44,000
          </Typography>
        </div>
        <div>
          <AccountBalanceWallet className={classes.cardIcon} />
        </div>
      </Card>

      <Card
        className={classes.card}
        style={{ borderLeft: "solid #009688 0.4rem" }}
      >
        <div>
          <Typography variant="body1" style={{ color: teal[500] }}>
            Earning (Monthly)
          </Typography>
          <Typography variant="h5" style={{ color: grey[600] }}>
            $ 44,000
          </Typography>
        </div>
        <div>
          <Assignment className={classes.cardIcon} />
        </div>
      </Card>

      <Card
        className={classes.card}
        style={{ borderLeft: "solid #ffeb3b 0.4rem" }}
      >
        <div>
          <Typography variant="body1" style={{ color: yellow[500] }}>
            Earning (Monthly)
          </Typography>
          <Typography variant="h5" style={{ color: grey[600] }}>
            $ 44,000
          </Typography>
        </div>
        <div>
          <Forum className={classes.cardIcon} />
        </div>
      </Card>
    </Grid>
  );
}

export default Cards;
