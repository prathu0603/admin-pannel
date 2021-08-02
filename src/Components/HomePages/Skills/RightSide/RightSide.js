import React from "react";
import useStyles from "./style";
import {
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
} from "@material-ui/core";

const RightSide = () => {
  const classes = useStyles();
  return (
    <div className={classes.RightSide}>
      <Card className={classes.Illustrations}>
        <CardHeader title="Illustrations" />
        <CardMedia
          className={classes.media}
          image="https://althemist.com/wp-content/uploads/2019/07/undraw_posting_photo_v65l.svg"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default RightSide;
