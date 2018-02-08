import React, { Component } from 'react';
// import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import './css/style.css';
import { connect } from 'react-redux';
import * as action from '../../../actions/actionListCourse/actionListCourse.js';
import IconButton from 'material-ui/IconButton';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
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
                  <div
                    className="imageShow"
                    onClick={() => this.onClickShowId(course.id)}
                  >
                    <img src={'http://10.10.1.65' + course.imageUrl} alt="logo" />
                  </div>
                  <CardContent>
                    <Typography type="headline" component="h1">
                      {course.courseName}
                    </Typography>
                    <Typography className="p">{course.description}...</Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton aria-label="Add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                      <ShareIcon />
                    </IconButton>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => this.onClickShowId(course.id)}
                      variant="raised"
                      color="secondary"
                    >
                      <Link to={'/listchapter/' + course.courseName}>
                        Chapter
                      </Link>
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                    <Typography className="price">${course.price}.00</Typography>
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
