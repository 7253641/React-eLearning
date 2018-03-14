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
        cartAmount: '1',
        homepage: {
            imageUrl: 'https://i.imgur.com/793X3RJ.jpg'
        },
        coursespage: {
            title: 'Courses',
            imageUrl: 'https://i.imgur.com/DCP0DZJ.png',
            directories: ['Home', 'Courses']
        }
    }
    render() {
        return (
            <Aux>
                <SubToolbar submenuInit={this.state.submenuInit} />
                {/* <Toolbar homepage={true} imageUrl={this.state.homepage.imageUrl} cartAmount={this.state.cartAmount}></Toolbar> */}
                <Toolbar
                    imageUrl={this.state.coursespage.imageUrl}
                    title={this.state.coursespage.title}
                    cartAmount={this.state.cartAmount}
                    directories={this.state.coursespage.directories}/>
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
