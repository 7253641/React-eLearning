import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radium from 'radium';
// import Button from 'material-ui/Button';
// import Divider from 'material-ui/Divider/Divider';
const styles = theme => ({
  input: {
    display: 'none',
  },
  root: {
    flexGrow: 1,
  },
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleOnClickLogin = this.handleOnClickLogin.bind(this);
  }

  handleOnClickLogin = () => {
    this.setState(() => {
      return {
        open: true,
      };
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <header id="header">
        <div className="Logo">
          <ul>
            <a href="/">E-LEARNING</a>
          </ul>
        </div>
        <div className="Nav" dir="ltr">
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/About Us">About Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
};


Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Radium(withStyles(styles)(Header));
