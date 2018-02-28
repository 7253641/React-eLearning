import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import './css/style.css';
import { connect } from 'react-redux';
import * as actionListCourse from '../../actions/actionListCourse/actionListCourse.js';
import IconButton from 'material-ui/IconButton';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ReactStars from 'react-stars';
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
                  <div className="imageShow">
                    <img
                      src={'http://10.10.1.65' + course.imageUrl}
                      alt="logo"
                    />
                  </div>
                  <CardContent>
                    <div className="courseName">
                      <h3> {course.courseName}</h3>
                    </div>
                    <div
                      className="courseDescription"
                      style={{
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {course.description}
                    </div>
                    <Grid container spacing={16}>
                      <Grid item xs={6}>
                        <ReactStars
                          className="staring"
                          count={5}
                          onChange={this.ratingChanged}
                          size={24}
                          color2={'#ffd700'}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <div className="priceCourse"> ${course.price}.00</div>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <IconButton aria-label="Add to favorites">
                      <FavoriteIcon style={{ fontSize: '1.8em' }} />
                    </IconButton>
                    <IconButton aria-label="Share">
                      <ShareIcon style={{ fontSize: '1.8em' }} />
                    </IconButton>
                    <Button
                      className="btn"
                      size="small"
                      variant="raised"
                      style={{
                        color: '#fff',
                        fontSize: '16px',
                        textTransform: 'lowercase',
                      }}
                    >
                      <Link to={'/courses/' + course.id}> Click more </Link>
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
  ratingChanged = rating => {
    console.log(this.props.getRating(rating));
  };
}

const mapStateToProps = state => {
  return {
    courses: state.dataReducer.data,
    rating: state.dataReducer.rating,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchData: () => {
      dispatch(actionListCourse.fetchDatasWithRedux());
    },
    getRating: rating => {
      dispatch(actionListCourse.getRating(rating));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListCourse);
