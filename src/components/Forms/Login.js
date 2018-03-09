import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Card, {
  CardContent
}
from 'material-ui/Card';
import './Login.css';
import Grid from 'material-ui/Grid';

export default class LoginForm extends React.Component {
  state = {
    open: true,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Card className="login-card">
          <CardContent>
            <h2 className="login-title">Login</h2>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="User Name"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Password"
              type="password"
              fullWidth
            />
            <Grid container className="submit-area">
              <Grid item md={4}></Grid>
              <Grid item md={2}>
                <Button href="/courses" variant="raised" size="large" color="primary" className="color-submit">
                  Submit
                </Button>
              </Grid>
              <Grid item md={4}></Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}
