import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import Homepage from './containers/Homepage/Homepage';
import Courses from './containers/Courses/Courses';
import SingleCourse from './containers/SingleCourse/SingleCourse';

class App extends Component {
  render() {
    return (
        <Layout>
        {/* <Homepage /> */}
        {/* <Courses /> */}
        {/* <SingleCourse /> */}
            <Switch>
                <Route path="/courses/:id" component={SingleCourse} />
                <Route path="/courses" component={Courses}/>
                <Route path="/" component={Homepage} />
                <Redirect to="/" />
            </Switch>
        </Layout>
    );
  }
}

export default withRouter(App);
