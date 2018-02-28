import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemText } from 'material-ui/List';
import { Link } from 'react-router-dom';
const styles = theme => ({
  root: {
    width: '100%',
  },
});

class VideoName extends Component {
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
        <Link to={'/courses/' + this.props.id + '' + this.props.videoUrl}>
          <ListItem>
            <ListItemText primary={this.props.videoName} />
          </ListItem>
        </Link>
      </div>
    );
  }
}
VideoName.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(VideoName);
