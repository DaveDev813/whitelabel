import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import LaunchContainer from "../containers/LaunchContainer";
import LaunchTitle from "../components/LaunchTitle";

import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  withStyles,
  createStyles,
  Theme
} from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      margin: `${theme.spacing.unit * 8}px 20%`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
        .spacing.unit * 3}px`
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing.unit + 30
    },
    button: {
      width: 185
    },
    forgot_password: {
      color: ""
    }
  });

const SignInScreen: React.FC<{ classes: any } & RouteComponentProps> = ({
  classes,
  history
}) => {
  return (
    <LaunchContainer>
      <div className={classes.paper}>
        <LaunchTitle subtitle="Welcome back! Please login to your account." />
        <form className={classes.form}>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="username"
                name="username"
                label="Username"
                fullWidth
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                type="password"
                fullWidth
                autoComplete="password"
              />
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={12}
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={24}
          >
            <Grid item>
              <FormControlLabel
                control={
                  <Checkbox color="primary" name="saveAddress" value="yes" />
                }
                label="Remember Me"
              />
            </Grid>
            <Grid item>
              <Typography
                style={{ cursor: "pointer" }}
                onClick={() => history.push(`/forgot-password`)}
              >
                Forgot Password
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="baseline"
            spacing={24}
          >
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Login
              </Button>
            </Grid>
            <Grid item>
              <Button
                type="button"
                variant="outlined"
                color="default"
                style={{
                  color: "#3F51B5",
                  backgroundColor: "#FFFFFF",
                  outlineColor: "#3F51B5"
                }}
                className={classes.button}
                onClick={() => history.push(`/signup`)}
              >
                Sign up
              </Button>
            </Grid>
          </Grid>
          <Grid />
        </form>
      </div>
    </LaunchContainer>
  );
};

export default withRouter(withStyles(styles)(SignInScreen));
