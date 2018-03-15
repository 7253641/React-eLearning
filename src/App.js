import React, { Component } from 'react';

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
          <SingleCourse />
      </Layout>
    );
  }
}

export default App;
