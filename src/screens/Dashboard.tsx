import React from "react";

// import { makeStyles } from "@material-ui/core/styles";
import { RouteComponentProps, withRouter } from "react-router";

// const useStyles = makeStyles(theme => ({}));

const Dashboard: React.FC<RouteComponentProps> = ({ history }) => {
  // const classes = useStyles();
  return <div>Dashboard</div>;
};

export default withRouter(Dashboard);
