import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  leftSide: {
    flex: 1,
    margin: theme.spacing(5, 5, 5, 0),
  },
  projects: {
    padding: theme.spacing(3, 2, 0),
    boxShadow: "-5px 6px 9px -3px rgba(0,0,0,0.74)",
  },
  LinearProgress: {
    height: "17px",
    borderRadius: theme.spacing(0.7),
    margin: theme.spacing(0, 0, 2, 0),
  },

  colorPaletteContainer: {
    margin: theme.spacing(5, 0, 0, 0),
  },
  colorContainer: {
    display: "flex",
    justifyContent: "space-between",
    margin: theme.spacing(0, 0, 3),
  },
  colorBox: {
    width: "280px",
    padding: theme.spacing(2.5, 1.5),
    borderRadius: theme.spacing(1),
  },
}));
