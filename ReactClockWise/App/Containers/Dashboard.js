/**
 * App/Containers/App.js
 */
"use strict";
import React from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import Nav from "../Components/Nav";
import Chart from "../Components/Chart";
import Timer from "../Components/Timer";
import TodoList from "../Components/TodoList";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return <Nav></Nav>;
};

export default Dashboard;
