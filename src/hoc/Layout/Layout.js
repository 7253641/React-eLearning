import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import SubToolbar from '../../components/SubNavigation/SubToolbar/SubToolbar';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';
import classes from './Layout.css';

class Layout extends Component {
    state = {
        submenuInit: {
            languages: ['English', 'VietNamese'],
            social: ['Facebook', 'Twitter', 'Instagram']
        },
        homePageImageUrl: 'https://i.imgur.com/793X3RJ.jpg',
        cartAmount: '10'
    }
    render() {
        return (
            <Aux>
                <SubToolbar submenuInit={this.state.submenuInit}></SubToolbar>
                <Toolbar homepage={true} imageUrl={this.state.homePageImageUrl} cartAmount={this.state.cartAmount}></Toolbar>
                <div className={classes.Height50} />
                <main>
                    {this.props.children}
                </main>
                <div className={classes.Height70} />
                <Footer />
            </Aux>
        );
    }
}

export default Layout;
