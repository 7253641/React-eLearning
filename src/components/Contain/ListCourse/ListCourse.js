import React, { Component } from 'react';
// import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import './css/style.css';

import { connect } from 'react-redux';
import * as action from '../../../actions/actionListCourse/actionListCourse.js';

import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';
class ListCourse extends Component {
  componentDidMount() {
    this.props.onFetchData();
  }
  render() {
    return (
      <div className="root">
        <Grid container spacing={24}>
          {this.props.courses.map((course, index) => {
            return (
              <Grid key={course.id} item xs={12} sm={6} md={3}>
                <Card className="card">
                  <CardContent>
                    <Typography type="headline" component="h2">
                      {course.id}.
                      {course.courseName}
                    </Typography>
                    <Typography component="p">{course.body}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => this.onClickShowId(course.id)}
                    >
                      <Link to={'/listchapter/' + course.courseName}>
                        Chapter
                      </Link>
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
  onClickShowId = id => {
    if (this.props.courses.length > 0) this.props.onPostId(id);
  };
}

const mapStateToProps = state => {
  return {
    courses: state.dataReducer.data,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchData: () => {
      dispatch(action.fetchDatasWithRedux());
    },
    onPostId: id => {
      dispatch(action.fetchDataSection(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListCourse);
