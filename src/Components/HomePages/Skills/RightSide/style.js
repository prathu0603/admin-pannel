import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  RightSide: {
    flex: 1,
    margin: theme.spacing(5, 0, 5, 0),
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  Illustrations: {
    boxShadow: "-5px 6px 9px -3px rgba(0,0,0,0.74)",
  },
}));
