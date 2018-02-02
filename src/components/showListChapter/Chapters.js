import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 2,
    marginTop: theme.spacing.unit * 3,
  }),
});
const Chapters = props => {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography type="headline" component="h4">
          {props.title}
        </Typography>
        <Typography component="p">{props.body}</Typography>
      </Paper>
    </div>
  );
};
Chapters.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Chapters);
