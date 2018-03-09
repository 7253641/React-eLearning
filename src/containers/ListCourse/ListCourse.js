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

  constructor(props) {
    super(props);
    this.handleOnScroll = this.handleOnScroll.bind(this);
    this.state = {
      loading: false,
    }
  }

  loadEventBrowserBack() {
    //  this.props.resetData();
    if (this.props.indexPage === -1) {
      this.props.increasePage();
      this.props.fetchDatasIndexPage(0);
    }
  }

  componentDidMount() {
    // for (let i = 0; i <= this.props.indexPage; i++){
    // console.log(i);

    this.loadEventBrowserBack();
    window.addEventListener('scroll', this.handleOnScroll);
  }

  componentWillUnmount() {
    // this.props.resetData();
    window.removeEventListener('scroll', this.handleOnScroll);

  }

  async fetchDatasFromIndexPage() {
    await this.props.fetchDatasIndexPage(this.props.indexPage);
  }

  increaseIndexPage = () => {
    this.props.increasePage();
  }

  // changeValueIsLoading = () => {
  //   let {dispatch} = this.props;
  //   dispatch(actionListCourse.loadingData());
  // }

  async handleOnScroll() {
    var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    var clientHeight = document.documentElement.clientHeight || window.innerHeight;
    var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    if (scrolledToBottom) {
      if (this.props.canLoad && !this.props.isLoading) {
        this.increaseIndexPage();
        this.props.changeValueLoading(true);
        await this.fetchDatasFromIndexPage();

      }
    }
  }
  
  render() {
    return (
      <div>
        {/* <div className="data-container"> */}
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
        {(() => {
          if (this.props.isLoading && this.props.canLoad) {
            return (
              <div className="data-loading">
                <i className="fa fa-refresh fa-spin"></i>
              </div>
            );
          } else {
            return (
              <div className="data-loading"></div>
            );
          }
        })()}
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
    indexPage: state.dataReducer.indexPage,
    canLoad: state.dataReducer.canLoad,
    isLoading: state.dataReducer.isLoading,
    // states:{
    //   courses: state.dataReducer.data,
    //   rating: state.dataReducer.rating,
    //   indexPage : state.dataReducer.indexPage,
    // }
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    getRating: rating => {
      dispatch(actionListCourse.getRating(rating));
    },
    fetchDatasIndexPage: (indexPage) => {
      dispatch(actionListCourse.fetchDatasIndexPage(indexPage))
    },
    increasePage: () => {
      dispatch(actionListCourse.increasePage())
    },
    resetData: () => {
      dispatch(actionListCourse.resetData());
    },
    changeValueLoading: (isLoading) => {
      dispatch(actionListCourse.changeValueIsLoading(isLoading));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListCourse);
