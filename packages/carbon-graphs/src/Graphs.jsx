import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './Graphs.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Content to be displayed as the name
   */
  name: PropTypes.string,
};

const defaultProps = {
  name: 'default',
};

const Graphs = ({ name, ...customProps }) => {
  const theme = React.useContext(ThemeContext);
  const GraphsClassNames = classNames(
    cx([
      'graphs',
      theme.className,
    ]),
    customProps.className,
  );

  return (<div {...customProps} className={GraphsClassNames}>{name}</div>);
};

Graphs.propTypes = propTypes;
Graphs.defaultProps = defaultProps;

export default Graphs;
