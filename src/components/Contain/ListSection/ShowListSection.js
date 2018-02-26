import React, { Component } from 'react';
import ListSection from './ListSection';
class ShowListSection extends Component {
  render() {
    return (
      <div>
        <ListSection id={this.props.match.params.id} />
      </div>
    );
  }
}

export default ShowListSection;
