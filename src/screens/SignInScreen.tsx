import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { Formik, FormikActions } from "formik";
import * as Yup from "yup";
import LaunchContainer from "../containers/LaunchContainer";
import LaunchTitle from "../components/LaunchTitle";

import {
  Grid,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  withStyles,
  createStyles,
  Theme
} from "@material-ui/core";
import InputField from "../components/Forms/Input";
import { GridProps } from "@material-ui/core/Grid";

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      margin: `${theme.spacing.unit * 4}px 20%`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit *
        1.5}px ${theme.spacing.unit * 1.5}px`
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing.unit + 30
    },
    button: {
      width: 185
    },
    signUp: {
      width: 185,
      color: "#3F51B5",
      backgroundColor: "#FFFFFF",
      outlineColor: "#3F51B5"
    },
    forgot_password: {
      color: ""
    }
  });

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Username too short.")
    .max(20, "Username too long.")
    .required("Username required"),
  password: Yup.string().required("Password required.")
});

const onSubmit = (values: any, actions: FormikActions<any>) => {
  console.log(values);
  actions.setSubmitting(false); // don't reload page
};

const gridContainerProps: GridProps = {
  direction: "row",
  justify: "space-between",
  alignItems: "center",
  spacing: 24
};

const SignInScreen: React.FC<{ classes: any } & RouteComponentProps> = ({
  classes,
  history
}) => {
  return (
    <LaunchContainer>
      <div className={classes.paper}>
        <LaunchTitle subtitle="Welcome back! Please login to your account." />
        <Formik
          initialValues={{
            username: "",
            password: ""
          }}
          {...history}
          validationSchema={LoginSchema}
          validateOnChange={true}
          onSubmit={onSubmit}
        >
          {({ handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={12}>
                  <InputField name="username" />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <InputField name="password" type="password" />
                </Grid>
              </Grid>

              <Grid container {...gridContainerProps}>
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        name="saveAddress"
                        value="yes"
                      />
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

              <Grid container {...gridContainerProps}>
                <Grid item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
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
                    className={classes.signUp}
                    onClick={() => history.push(`/signup`)}
                  >
                    Sign up
                  </Button>
                </Grid>
              </Grid>
              <Grid />
            </form>
          )}
        </Formik>
      </div>
    </LaunchContainer>
  );
};

export default withRouter(withStyles(styles)(SignInScreen));
