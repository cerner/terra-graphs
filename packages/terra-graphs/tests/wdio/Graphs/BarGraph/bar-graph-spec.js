Terra.describeViewports(' BasicBarGrpah', ['tiny', 'medium', 'large'], () => {
  describe('Basic bar graphs', () => {
    it('validates Axis info text labels graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/bar-graph/basic-bar-graphs/axis-info-text-labels');
      Terra.validates.screenshot('axis_info_text_labels', { selector: '.carbon-graph-container' });
    });

    it('validates grouped bars graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/bar-graph/basic-bar-graphs/grouped-bars');
      Terra.validates.screenshot('grouped_bars', { selector: '.carbon-graph-container' });
    });

    it('validates negative bars graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/bar-graph/basic-bar-graphs/negative-bars');
      Terra.validates.screenshot('negative_bars', { selector: '.carbon-graph-container' });
    });

    it('validates simple bar graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/bar-graph/basic-bar-graphs/simple-bar');
      Terra.validates.screenshot('simple_Bar', { selector: '.carbon-graph-container' });
    });

    it('validates stacked axis info test labels graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/bar-graph/basic-bar-graphs/stacked-axis-info-text-labels');
      Terra.validates.screenshot('stacked_axis_info_text_labels', { selector: '.carbon-graph-container' });
    });

    it('validates stacked bars graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/bar-graph/basic-bar-graphs/stacked-bars');
      Terra.validates.screenshot('stacked_bars', { selector: '.carbon-graph-container' });
    });

    it('validates timeseries graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/bar-graph/basic-bar-graphs/timeseries');
      Terra.validates.screenshot('timeseries', { selector: '.carbon-graph-container' });
    });

    it('validates timeseries with dateline graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/bar-graph/basic-bar-graphs/timeseries-with-dateline');
      Terra.validates.screenshot('timeseries_With_dateline', { selector: '.carbon-graph-container' });
    });

    it('validates timeseries with eventline graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/bar-graph/basic-bar-graphs/timeseries-with-eventline');
      Terra.validates.screenshot('timeseries_With_eventline', { selector: '.carbon-graph-container' });
    });
  });

  describe('Goal lines', () => {
    it('validates bar graph with grouped goal lines graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/bar-graph/goal-line/grouped-goal-lines');
      Terra.validates.screenshot('grouped_goal_lines', { selector: '.carbon-graph-container' });
    });

    it('validates bar graph with simple goal line graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/bar-graph/goal-line/simple-goal-lines');
      Terra.validates.screenshot('simple_goal_lines', { selector: '.carbon-graph-container' });
    });

    it('validates bar graph with stacked goal line graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/bar-graph/goal-line/stacked-goal-lines');
      Terra.validates.screenshot('stacked_goal_lines', { selector: '.carbon-graph-container' });
    });
  });
});

