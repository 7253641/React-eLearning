import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import SubToolbar from '../../components/SubNavigation/SubToolbar/SubToolbar';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import HeaderCover from '../../components/HeaderCover/HeaderCover';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
    state = {
        submenuInit: {
            languages: ['English', 'VietNamese'],
            social: ['Facebook', 'Twitter', 'Instagram']
        }
    }
    render() {
        return (
            <Aux>
                <SubToolbar submenuInit={this.state.submenuInit}></SubToolbar>
                <Toolbar></Toolbar>
                <HeaderCover isHomepage></HeaderCover>
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </Aux>
        );
    }
}

export default Layout;
