import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     height: 200,
//     width: 200,
//     // backgroundColor: "#ff5f00",
//     borderColor: "#ffc107",
//     borderWidth: 10,
//     borderRadius: "50%",
//   },
//   actionButton: {
//     position: "relative",
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     alignItems: "center",
//     justifyContent: "center",
//     display: "flex",
//     zIndex: 1000,
//   },
//   control: {
//     padding: theme.spacing(2),
//   },
// }));

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  actionButton: {
    borderColor: "#ffc107",
    borderWidth: 10,
    borderRadius: "50%",
    width: 200,
    height: 200,
  },
}));

const StopWatch = () => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  return (
    // <Grid container className={classes.root} spacing={2}>
    //   <Grid item xs={12}>
    //     <Grid container justify="center" spacing={spacing}>
    //       <Grid item xs={12}>
    //         <Paper className={classes.paper} variant="outlined">
    // <ButtonBase className={classes.actionButton}>
    //   <Typography>Start</Typography>
    // </ButtonBase>
    //         </Paper>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </Grid>
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Button variant="outlined" className={classes.actionButton}>
              <Typography variant="h4">Start</Typography>
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default StopWatch;
