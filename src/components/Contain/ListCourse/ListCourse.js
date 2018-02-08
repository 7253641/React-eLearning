import React, { Component } from 'react';
// import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import './css/style.css';

import { connect } from 'react-redux';
import {
  fetchDatasWithRedux,
  postIdWithRedux,
  getRating,
} from '../../../actions/actionListCourse/actionListCourse.js';
import IconButton from 'material-ui/IconButton';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ReactStars from 'react-stars';

class ListCourse extends Component {
  componentDidMount() {
    this.props.fetchDatasWithRedux();
  }
 
  render() {
    return (
      <div className="root">
        <Grid container spacing={24}>
          {this.props.data.map((card, index) => {
            return (
              <Grid key={card.id} item xs={12} sm={6} md={3}>
                <Card className="card">
                  <div
                    className="imageShow"
                    onClick={() => this.onClickShowId(card.id)}
                  >
                    <img src={'http://10.10.1.65' + card.imageUrl} alt="logo" />
                  </div>
                  <CardContent>
                    <Typography type="headline" component="h1">
                      {card.courseName}
                    </Typography>
                    <Typography className="p">{card.description}..</Typography>
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
                        <Typography className="price">
                          ${card.price}.00
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <IconButton aria-label="Add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                      <ShareIcon />
                    </IconButton>
                    <Button
                      className="btn"
                      size="small"
                      variant="raised"
                      onClick={() => this.onClickShowId(card.id)}
                    >
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
  onClickShowId = postId => {
    this.props.postIdWithRedux(postId);
  };
  ratingChanged = rating => {
    console.log(this.props.getRating(rating));
  };
}

function mapStateToProps(state) {
  return {
    data: state.dataReducer.data,
    rating: state.dataReducer.rating,
  };
}
export default connect(mapStateToProps, {
  fetchDatasWithRedux,
  postIdWithRedux,
  getRating,
})(ListCourse);
