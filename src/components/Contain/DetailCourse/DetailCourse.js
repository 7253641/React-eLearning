import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import './style.css';
class DetailCourse extends Component {
  render() {
    if (this.props.img === undefined || this.props.des === undefined) {
      return null;
    } else {
      return (
        <div className="root">
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <h3>{this.props.title}</h3>
            </Grid>
            <Grid item xs={6}>
              <div className="imageCourse">
                <img src={'http://10.10.1.65' + this.props.img} alt="logo" />
              </div>
            </Grid>
            <Grid item xs={6}>
              {this.props.des}
            </Grid>
          </Grid>
        </div>
      );
    }
  }
}

export default DetailCourse;
