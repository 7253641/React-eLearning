import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

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
  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography>{this.props.videoName}</Typography>
      </div>
    );
  }
}
Video.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Video);
