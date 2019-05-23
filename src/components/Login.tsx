import React, { Component } from 'react';
import { TextField, Grid, Button, Icon, Checkbox, FormControlLabel } from '@material-ui/core';
import { AccountCircle, VpnKey } from '@material-ui/icons';

class Login extends Component {
    render() {
        return (
            <>
                <Grid container style={{height: "100%"}}>
                    <Grid item md={6}>TEST 1</Grid>
                    <Grid container item md={6} alignItems="center" justify="center">                            
                        <Grid container alignItems="flex-end" justify="center">
                            
                            R E G A S C O
                            <br/>
                            Welcome back! Please login to your account.
                            {/* Username Start */}
                            <Grid container alignItems="flex-end" justify="center">
                                <Grid item>
                                    <AccountCircle />
                                </Grid>
                                <Grid item>
                                    <TextField id="input-with-icon-grid" label="Username"/>
                                </Grid>
                            </Grid>
                            {/* Username End */}

                            {/* Password Start */}
                            <Grid container alignItems="flex-end" justify="center">
                                <Grid item>
                                    <VpnKey />
                                </Grid>
                                <Grid item>
                                    <TextField id="input-with-icon-grid" label="Password"/>
                                </Grid>
                            </Grid>
                            {/* Password End */}
                            
                            <Grid item>
                                <FormControlLabel control={ <Checkbox color="primary" /> } label="Remember Me"/>       Forgot Password
                                <br/>
                                <Button variant="contained" size="small">
                                    Sign In
                                </Button>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </>
        );
    }
}

export default Login;