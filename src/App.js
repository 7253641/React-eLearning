import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import Homepage from './containers/Homepage/Homepage';

class App extends Component {
  render() {
    return (
      <Layout>
          <Homepage />
      </Layout>
    );
  }
}

export default App;
