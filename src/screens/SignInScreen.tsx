import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { FormikProps, withFormik, FormikErrors } from "formik";
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

interface FormValues {
  username: '',
  password: ''
}

interface FormProps {
  username: string,
  password: string
}

const originalFields = (props: any & FormikProps<FormValues>) => {
  const { handleChange, handleSubmit, errors } = props;

  return (
  <form onSubmit={handleSubmit}>
    <Grid container spacing={24}>
      <Grid item xs={12} sm={12}>
        <TextField
          // required
          onChange={handleChange}
          id="username"
          name="username"
          label="Username"
          fullWidth
          autoComplete="username"
        />
        <div>{errors.username}</div>
      </Grid>
      <Grid item xs={12} sm={12}>
        <TextField
          // required
          onChange={handleChange}
          id="password"
          name="password"
          label="Password"
          type="password"
          fullWidth
          autoComplete="password"
        />
        <div>{errors.password}</div>
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
          // onClick={() => history.push(`/forgot-password`)}
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
          // disabled={isSubmitting}
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
          // onClick={() => history.push(`/signup`)}
        >
          Sign up
        </Button>
      </Grid>
    </Grid>
    <Grid />
  </form>
  );
}

const MyForm = withFormik({
  mapPropsToValues: () => ({
    username: '',
    password: ''
  }),
  
  validate: (values) => {
    
    console.log(values);
    
    let errors: FormikErrors<FormValues> = {};
    
    if(values.username === '') {
      errors.username = 'Username is required.';
    }
    
    if(values.password === '') {
      errors.password = 'Password is required.';
    }

    return errors;
    
  },
  
  handleSubmit: (values, actions) => {
    console.log(values, actions);
    // actions.setSubmitting(false);
  }
})(originalFields)

const SignInScreen: React.FC<{ classes: any } & RouteComponentProps> = ({
  classes,
  history
}) => {
  return (
    <LaunchContainer>
        <div className={classes.paper}>
          <LaunchTitle subtitle="Welcome back! Please login to your account." />
        </div>
 
        <MyForm {...classes} />
    </LaunchContainer>
  );
};

export default withRouter(withStyles(styles)(SignInScreen));