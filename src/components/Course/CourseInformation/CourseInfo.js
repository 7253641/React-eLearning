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
            <Grid item xs={12} sm={12} md={6}>
              <div>
                <div className="imageCourse">
                  <img src={'http://10.10.1.65:8080/api-1.1/api/' + this.props.img} alt="logo" />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <h3>{this.props.title}</h3>
              <p>{this.props.des}</p>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
}

export default DetailCourse;
