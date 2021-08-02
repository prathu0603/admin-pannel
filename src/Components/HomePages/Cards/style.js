import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  cards: {
    width: "100%",
    margin: theme.spacing(5, 0, 0),
  },
  card: {
    padding: theme.spacing(3, 2),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "15rem",
    height: "4rem",
    boxShadow: "-5px 6px 9px -3px rgba(0,0,0,0.74)",
  },
  cardIcon: {
    height: "3rem",
    width: "3rem",
    color: grey[500],
  },
}));
