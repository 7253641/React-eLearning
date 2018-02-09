import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import Typography from 'material-ui/Typography';
import { ListItem, ListItemText } from 'material-ui/List';
import videoActionCreators from '../../actions/videoActions/actionCreators';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const styles = theme => ({
  root: {
    width: '100%',
  },
});

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: null,
    };
  }

  onClickShowVideo = url => {
    this.props.videoFetchFulfilled(url);
    console.log("abcd123", url);
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Link to="/video">
          <ListItem button onClick={() => this.onClickShowVideo(this.props.videoUrl)}>
            <ListItemText primary={this.props.videoName} />
          </ListItem>
       </Link>
      </div>
    );
  }
}
Video.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapDispatchToProps = dispatch => {
  return {
    videoFetchFulfilled: URL => {
      dispatch(videoActionCreators.videoFetchFulfilled(URL));
    },
  };
};
export default connect(null, mapDispatchToProps)(withStyles(styles)(Video));
