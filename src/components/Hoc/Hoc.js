import React from 'react';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

const wrapper = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default wrapper;
