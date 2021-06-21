Terra.describeViewports('Timeline graphs', ['tiny', 'medium', 'large'], () => {
  describe('Basic Timeline graphs', () => {
    it('validates simple timeline container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/timeline/basic-timeline/simple-timeline');
      Terra.validates.screenshot('simple_timeline', { selector: '.carbon-timeline-container' });
    });
    it('validates axis with no ticks timeline container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/timeline/basic-timeline/axis-with-no-tick-values');
      Terra.validates.screenshot('axis_with_no_tick_values', { selector: '.carbon-timeline-container' });
    });
  });
  describe('Timeline Criticality', () => {
    it('validates criticality timeline container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/timeline/criticality/timeline-criticality');
      Terra.validates.screenshot('timeline_criticality', { selector: '.carbon-timeline-container' });
    });
  });
});
