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
// import Video from './Video';
import List from 'material-ui/List';
const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: '18px',
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: '18px',
    color: 'black',
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
    let myVideoNameList = this.props.sectionVideo.map(element => {
      return <MapVideo key={element.video_name} videoName= {element.video_name} videoUrl={element.video_url} id={this.props.id}/>
    });
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
          <ExpansionPanelDetails> 
          <List component="nav">{myVideoNameList}</List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}
Chapters.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    SectionData: state.section,
  };
};

export default connect(mapStateToProps,null)(withStyles(styles)(Chapters));
