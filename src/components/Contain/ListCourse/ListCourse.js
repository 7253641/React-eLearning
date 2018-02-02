import React, { Component } from 'react';
// import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import './css/style.css';

import { connect } from 'react-redux';
import { fetchDatasWithRedux } from '../../../actions/actionListCourse';

import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

class ListCourse extends Component {
  componentDidMount() {
    this.props.fetchDatasWithRedux();
  }

  render() {
    return (
      <div className="root">
        <Grid container spacing={24}>
          {this.props.data &&
            this.props.data.map((card, index) => {
              return <Grid key={card.id} item xs={3}>
                        <Card className="card">
                                    {/* <CardMedia
                                        className='media'
                                        image='http://www.liveanimalslist.com/reptiles/images/lizard-eye-view.jpg'
                                        title="Contemplative Reptile"
                                        /> */}
                                    <CardContent>
                                        <Typography type="headline" component="h2">
                                            {card.id}
                                            {card.courseName}
                                        </Typography>
                                        <Typography component="p">
                                            {card.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Share
                                        </Button>
                                        <Button size="small" color="primary">
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                        </Grid>
            })}
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state){
    console.log(state.dataReducer)
    return {
        data: state.dataReducer.data
    }
}
// console.log({fetchDatasWithRedux})
export default connect(
    mapStateToProps,
    {fetchDatasWithRedux}
)(ListCourse);
