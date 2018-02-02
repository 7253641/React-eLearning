import React from 'react'; 
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import './rightContain.css';
const styles = {
  card: {
    maxWidth: 350,
  },
  media: {
    height: 50,
  },
};
const rightcontainer = (props) => {
  const {classes} = props;
  return(
      <div className="news">
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography type="headline" component="h2">
                  ReactJS
                </Typography>
                <Typography component="p">
                A JavaScript library for building user interfaces
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
          <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography type="headline" component="h2">
                  Java Spring
                </Typography>
                <Typography component="p">
                  Spring Framework 5.0
                    The right stack for the right job.
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
    </div>
  )
}
rightcontainer.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(rightcontainer);