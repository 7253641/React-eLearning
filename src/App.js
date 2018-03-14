import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import Homepage from './containers/Homepage/Homepage';
import Courses from './containers/Courses/Courses';

class App extends Component {
  render() {
    return (
      <Layout>
          {/* <Homepage /> */}
          <Courses />
      </Layout>
    );
  }
}

export default App;
