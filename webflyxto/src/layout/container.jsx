import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <div className="
      container-styles
    ">
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired
};

export default Container;


