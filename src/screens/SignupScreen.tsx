import React from "react";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { Theme, createStyles } from "@material-ui/core";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { RouteComponentProps, withRouter } from "react-router";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftDiv = styled.img`
  width: 50vw;
  height: 100vh;
`;

const RightDiv = styled.div`
  width: 50vw;
  height: 100vh;
`;

const styles = (theme: Theme) =>
  createStyles({
    main: {
      width: "auto",
      display: "block", // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: "auto",
        marginRight: "auto"
      }
    },
    paper: {
      margin: `${theme.spacing.unit * 8}px 20%`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
        .spacing.unit * 3}px`
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing.unit + 30
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
      width: "185px"
    },
    subHeader: {
      marginTop: "12px"
    }
  });

const SignupScreen: React.FC<{ classes: any } & RouteComponentProps> = ({
  classes,
  history
}) => {
  return (
    <Container>
      <LeftDiv src={require("../assets/images/launchBG.png")} />
      <RightDiv>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            REGASCO
          </Typography>
          <Typography
            className={classes.subHeader}
            align="center"
            color="textSecondary"
            component="p"
          >
            Please complete to create your account
          </Typography>
          <form className={classes.form}>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="fname"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="username"
                  name="username"
                  label="Username"
                  fullWidth
                  autoComplete="Username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  autoComplete="Email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  name="password"
                  type="password"
                  id="password"
                  label="Password"
                  autoComplete="current-password"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  name="confirmpassword"
                  type="password"
                  id="confirmpassword"
                  label="Confirm Password"
                  autoComplete="current-password"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: "left" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      name="saveAddress"
                      value="yes"
                    />
                  }
                  label="I agree with terms and conditions"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign up
            </Button>
            <Typography
              className={classes.subHeader}
              align="center"
              color="textSecondary"
              component="p"
              style={{ marginTop: "30px" }}
              onClick={() => history.push(`/signin`)}
            >
              Already have an account? Sign in.
            </Typography>
          </form>
        </div>
      </RightDiv>
    </Container>
  );
};

export default withRouter(withStyles(styles)(SignupScreen));
