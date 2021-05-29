Terra.describeViewports('Timeline graphs', ['tiny', 'medium', 'large'], () => {
  describe('Basic Timeline graphs', () => {
    it('validates simple timeline container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/timeline/basic-timeline/simple-timeline');
      Terra.validates.screenshot('simple_timeline', { selector: '.carbon-timeline-container' });
    });
    it('validates axis with no ticks timeline container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/timeline/basic-timeline/axis-with-no-tick-values');
      Terra.validates.screenshot('axis_with_no_tick_values', { selector: '.carbon-timeline-container' });
    });
  });
  describe('Timeline Criticality', () => {
    it('validates criticality timeline container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/timeline/criticality/timeline-criticality');
      Terra.validates.screenshot('timeline_criticality', { selector: '.carbon-timeline-container' });
    });
  });

  describe('Reflow', () => {
    describe('simple panning', () => {
      let panningBtn = null;

      beforeEach(() => {
        browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/timeline/reflow/simple-panning');
      });
      it('validates panning left', () => {
        panningBtn = $('.button-pan-left');
        panningBtn.click();
        Terra.validates.screenshot('simple_panning_left_1', { selector: '.carbon-timeline-container' });
        panningBtn.click();
        Terra.validates.screenshot('simple_panning_left_2', { selector: '.carbon-timeline-container' });
        panningBtn.click();
        Terra.validates.screenshot('simple_panning_left_3', { selector: '.carbon-timeline-container' });
      });
      it('validates panning right', () => {
        panningBtn = $('.button-pan-right');
        panningBtn.click();
        Terra.validates.screenshot('simple_panning_right_1', { selector: '.carbon-timeline-container' });
        panningBtn.click();
        Terra.validates.screenshot('simple_panning_right_2', { selector: '.carbon-timeline-container' });
        panningBtn.click();
        Terra.validates.screenshot('simple_panning_right_3', { selector: '.carbon-timeline-container' });
      });
    });

    describe('dynamic data', () => {
      let panningBtn = null;

      beforeEach(() => {
        browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/timeline/reflow/dynamic-data');
      });
      it('validates dynaimcally updating of a dataset', () => {
        panningBtn = $('.button-pan-right');
        panningBtn.click();
        Terra.validates.screenshot('dynamic_data_1', { selector: '.carbon-timeline-container' });
        panningBtn.click();
        Terra.validates.screenshot('dynamic_data_2', { selector: '.carbon-timeline-container' });
      });
    });
 
  });
});
