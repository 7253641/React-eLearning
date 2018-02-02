import React from 'react'; 
import './Header.css';
import logo from '../../Asset/LOGO1.png';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radium from 'radium';
// import Button from 'material-ui/Button';
// import Grid from 'material-ui/Grid';
// import Divider from 'material-ui/Divider/Divider';
// import 'bootstrap/dist/css/bootstrap.min.css';
const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
    root: {
        flexGrow: 1,

    }
  });

const header = (props) => {
    // const {classes} = props;
    // const myFunction = () => {
    //     var x = document.getElementById("topNav");
    //     if (x.className === 'Nav') {
    //         x.className += 'responsive';
    //     } else {
    //         x.className = 'Nav';
    //     }
    // }
    return(       
            <header className="header">
                <div className="Logo">
                    <img src={logo} alt="elearning" />
                </div>
                <div className="Nav" dir="ltr" id="topNav">
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                                <li><a href="/Courses">Courses</a></li>
                                <li><a href="/Catalog">Catalog</a></li>
                                <li><a href="/About Us">About Us</a></li>
                                <li><a>|</a></li>
                                <li><a href="/Login">Login</a></li>
                                {/* <li><a href="javascript:void(0);" onSubmit={this.join} style={{fontSize: "15px"}} className="icon" onClick={myFunction}>#9776</a></li> */}
                        </ul>  
                    </nav>
                </div>
            </header>
    );
}

header.propTypes = {
    classes: PropTypes.object.isRequired,

  };

export default Radium(withStyles(styles)(header)); 