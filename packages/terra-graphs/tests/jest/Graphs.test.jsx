import React from 'react';
import Graphs from '../../src/Graphs';

describe('Graphs', () => {
  const defaultRender = <Graphs />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.graphs').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class graphs', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('graphs');
  });
});
