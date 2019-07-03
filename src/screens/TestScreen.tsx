import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import faker from "faker";

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    position: "relative"
  }
}));

const AppBarItem: React.FC<{ name: string; sub: string }> = ({ name, sub }) => {
  return (
    <Grid item style={{ padding: "20px" }}>
      <Typography component="h1" variant="h5">
        {name}
      </Typography>
      <Typography
        align="center"
        color="textSecondary"
        component="p"
        style={{
          marginTop: "12px",
          marginBottom: "40px"
        }}
      >
        {sub}
      </Typography>
    </Grid>
  );
};

const TestScreen: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar position="absolute" color="default" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          <Grid container>
            <AppBarItem name="COMPANY NAME" sub="Jun 10 - jun 16" />
            <AppBarItem
              name={faker.name.firstName()}
              sub={faker.name.firstName()}
            />
            <AppBarItem
              name={faker.name.firstName()}
              sub={faker.name.firstName()}
            />
            <AppBarItem
              name={faker.name.firstName()}
              sub={faker.name.firstName()}
            />
          </Grid>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TestScreen;
