import React from "react";
import LaunchContainer from "../containers/LaunchContainer";
import { Theme, createStyles, CssBaseline } from "@material-ui/core";
import LaunchTitle from "../components/LaunchTitle";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import styled from "styled-components";

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
      marginTop: theme.spacing.unit * 8,
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
      marginTop: theme.spacing.unit
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
      width: "185px"
    }
  });

const StyledLaunchTitle = styled(LaunchTitle)({
  width: "50%"
});

class ForgotPassword extends React.Component<{ classes: any }> {
  render() {
    const { classes } = this.props;
    return (
      <LaunchContainer>
        <main className={classes.main}>
          <CssBaseline />
          <div className={classes.paper}>
            <StyledLaunchTitle subtitle="Enter your email and we will send you a password reset link." />
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input id="email" name="email" autoComplete="email" autoFocus />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Send Request
              </Button>
            </form>
          </div>
        </main>
      </LaunchContainer>
    );
  }
}

export default withStyles(styles)(ForgotPassword);
