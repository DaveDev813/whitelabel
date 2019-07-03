import React from "react";
import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";
import { Theme, Container, CssBaseline } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { RouteComponentProps, withRouter } from "react-router";
import { Formik } from "formik";
import LaunchContainer from "../containers/LaunchContainer";
import LaunchTitle from "../components/LaunchTitle";
import * as Yup from "yup";
import { CheckBox, InputField } from "../components/Forms/Input";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%" // Fix IE 11 issue.
  },
  submit: {
    marginTop: theme.spacing(3),
    width: "185px"
  }
}));

const defaultValues = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  confirmpassword: "",
  terms: false
};

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name required."),
  lastName: Yup.string().required("Last Name required."),
  username: Yup.string().required("Username is required."),
  email: Yup.string()
    .required("Email is required.")
    .email(),
  password: Yup.string().required("Password is required"),
  confirmpassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "Confirm password must match with password."
    )
    .required("Confirm password required."),
  terms: Yup.boolean().oneOf([true], "Must accept terms and conditions.")
});

const SignupScreen: React.FC<RouteComponentProps> = ({ history }) => {
  const classes = useStyles();
  return (
    <LaunchContainer>
      <div className={classes.paper}>
        <LaunchTitle subtitle="Please complete to create your account" />

        <Formik
          initialValues={defaultValues}
          onSubmit={(values, actions) => {
            console.log(values);
            actions.setSubmitting(false); // don't reload page
          }}
          validationSchema={SignupSchema}
          validateOnChange={true}
          render={({ errors, handleChange, handleSubmit, isSubmitting }) => (
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <InputField name="firstName" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputField name="lastName" label="Last Name" />
                  </Grid>
                  <Grid item xs={12}>
                    <InputField fullWidth name="username" />
                  </Grid>
                  <Grid item xs={12}>
                    <InputField fullWidth name="email" />
                  </Grid>
                  <Grid item xs={12}>
                    <InputField fullWidth name="password" type="password" />
                  </Grid>
                  <Grid item xs={12}>
                    <InputField
                      fullWidth
                      name="confirmpassword"
                      label="Confirm Password"
                      type="password"
                    />
                  </Grid>
                  <Grid item xs={12} style={{ textAlign: "left" }}>
                    <CheckBox
                      name="terms"
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
                  disabled={isSubmitting}
                >
                  Sign up
                </Button>
                <Typography
                  // className={classes.subHeader}
                  align="center"
                  color="textSecondary"
                  component="p"
                  style={{ marginTop: "30px", cursor: "pointer" }}
                  onClick={() => history.push(`/signin`)}
                >
                  Already have an account? Sign in.
                </Typography>
              </form>
            </Container>
          )}
        />
      </div>
    </LaunchContainer>
  );
};

export default withRouter(SignupScreen);
