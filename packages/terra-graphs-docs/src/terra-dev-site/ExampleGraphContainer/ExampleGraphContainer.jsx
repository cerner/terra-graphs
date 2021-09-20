import React from 'react';
import PropTypes from 'prop-types';
import './ExampleGraphContainer.module.scss';

const propTypes = {
  /*
   * The unique identifier for the graph container .
   */
  id: PropTypes.string.isRequired,
};

const ExampleGraphContainer = (props) => (
  <div id={props.id} className="example-graph-container" />
);

ExampleGraphContainer.propTypes = propTypes;

export default ExampleGraphContainer;
