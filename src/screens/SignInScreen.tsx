import React from "react";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid, { GridProps } from "@material-ui/core/Grid";

import { makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import * as Yup from "yup";

import { RouteComponentProps, withRouter } from "react-router";
import LaunchContainer from "../containers/LaunchContainer";
import LaunchTitle from "../components/LaunchTitle";
import { Formik, FormikActions } from "formik";
import { InputField } from "../components/Forms/Input";

const useStyles = makeStyles((theme: Theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "150px"
  }
}));

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Username too short.")
    .max(20, "Username too long.")
    .required("Username required"),
  password: Yup.string().required("Password required.")
});

const gridContainerProps: GridProps = {
  direction: "row",
  justify: "space-between",
  alignItems: "center"
};

const SignInScreen: React.FC<RouteComponentProps> = ({ history }) => {
  const classes = useStyles();
  const onSubmit = (values: any, actions: FormikActions<any>) => {
    console.log(values);
    actions.setSubmitting(false);
    history.push(`/dashboard`); // don't reload page
  };
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
          {({ handleSubmit }: any) => (
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <form
                  className={classes.form}
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <InputField name="username" label="Username" />
                  <InputField name="password" label="Password" />

                  <Grid container {...gridContainerProps}>
                    <Grid item>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      >
                        Sign In
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        type="button"
                        onClick={() => history.push(`/signup`)}
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      >
                        Sign Up
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid container {...gridContainerProps}>
                    <Grid item>
                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                      />
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Container>
          )}
        </Formik>
      </div>
    </LaunchContainer>
  );
};

export default withRouter(SignInScreen);
