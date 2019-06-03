import React from "react";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { Theme, createStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { RouteComponentProps, withRouter } from "react-router";
import { Formik } from "formik";
import LaunchContainer from "../containers/LaunchContainer";
import LaunchTitle from "../components/LaunchTitle";
import * as Yup from "yup";

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
    }
  });
  
const defaultValues = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  confirmpassword: '',
  terms: false
}

const SignupSchema = Yup.object().shape({
  firstName: Yup
    .string()
    .required('First Name required.'),
  lastName: Yup
    .string()
    .required('Last Name required.'),
  username: Yup
    .string()
    .required('Username is required.'),
  email: Yup
    .string()
    .required('Email is required.').email(),
  password: Yup
    .string()
    .required('Password is required'),
  confirmpassword: Yup
    .string()
    .oneOf([Yup.ref('password'), null], 'Confirm password must match with password.')
    .required('Confirm password required.'),
    terms: Yup.boolean().oneOf([true],'Must accept terms and conditions.')
})

const SignupScreen: React.FC<{ classes: any } & RouteComponentProps> = ({
  classes,
  history
}) => {
  return (
    <LaunchContainer>
      <div className={classes.paper}>
        <LaunchTitle subtitle="Please complete to create your account" />
        
        <Formik
        
          initialValues={defaultValues}
          
          onSubmit={(values, actions) => {
              console.log(values)
              actions.setSubmitting(false); // don't reload page
            }
          }

          validationSchema={SignupSchema}

          validateOnChange={false}

          render={
            ({
              values,
              errors,
              status,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting
            }) => (
              <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={24}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      onChange={handleChange}
                      id="firstName"
                      name="firstName"
                      label="First name"
                      fullWidth
                      autoComplete="fname"
                    />
                    {errors.firstName ? <div style={{color: 'red'}}>{errors.firstName}</div> : null}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      onChange={handleChange}
                      id="lastName"
                      name="lastName"
                      label="Last name"
                      fullWidth
                      autoComplete="lname"
                    />
                    {errors.lastName ? <div style={{color: 'red'}}>{errors.lastName}</div> : null}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      onChange={handleChange}
                      id="username"
                      name="username"
                      label="Username"
                      fullWidth
                      autoComplete="username"
                    />
                    {errors.username ? <div style={{color: 'red'}}>{errors.username}</div> : null}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      onChange={handleChange}
                      id="email"
                      name="email"
                      label="Email"
                      fullWidth
                      autoComplete="Email"
                    />
                    {errors.email ? <div style={{color: 'red'}}>{errors.email}</div> : null}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      onChange={handleChange}
                      name="password"
                      type="password"
                      id="password"
                      label="Password"
                      autoComplete="current-password"
                      fullWidth
                    />
                    {errors.password ? <div style={{color: 'red'}}>{errors.password}</div> : null}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      onChange={handleChange}
                      name="confirmpassword"
                      type="password"
                      id="confirmpassword"
                      label="Confirm Password"
                      autoComplete="current-password"
                      fullWidth
                    />
                    {errors.confirmpassword ? <div style={{color: 'red'}}>{errors.confirmpassword}</div> : null}
                  </Grid>
                  <Grid item xs={12} style={{ textAlign: "left" }}>
                    <FormControlLabel
                      onChange={handleChange}
                      control={
                        <Checkbox color="secondary" name="terms" value="" />
                      }
                      label="I agree with terms and conditions"
                    />{errors.terms ? <div style={{color: 'red'}}>{errors.terms}</div> : null}
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
                  className={classes.subHeader}
                  align="center"
                  color="textSecondary"
                  component="p"
                  style={{ marginTop: "30px", cursor: "pointer" }}
                  onClick={() => history.push(`/signin`)}
                >
                  Already have an account? Sign in.
                </Typography>
              </form>
            )
          }
          
        />

        
      </div>
    </LaunchContainer>
  );
};

export default withRouter(withStyles(styles)(SignupScreen));
