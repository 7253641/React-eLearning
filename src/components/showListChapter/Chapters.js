import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import MapVideo from './MapVideo';
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class Chapters extends Component {
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
    const { expanded } = this.state;
    return (
      <div className={classes.root}>
        <ExpansionPanel
          expanded={expanded === 'panel1'}
          onChange={this.handleChange('panel1')}
        >
          <ExpansionPanelSummary>
            <Typography className={classes.heading}>
              {this.props.sectionName}
            </Typography>
            <Typography className={classes.secondaryHeading}> </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails> <MapVideo listVideo /> </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}
Chapters.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(Chapters));
