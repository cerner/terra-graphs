Terra.describeViewports('Timeline graphs', ['tiny', 'medium', 'large'], () => {
  describe('Basic Timeline graphs', () => {
    it('validates simple timeline container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/timeline/basic-timeline/simple-timeline');
      Terra.validates.screenshot('simple_timeline');
    });
    it('validates axis with no ticks timeline container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/timeline/basic-timeline/axis-with-no-tick-values');
      Terra.validates.screenshot('axis_with_no_tick_values');
    });
  });
  describe('Timeline Criticality', () => {
    it('validates criticality timeline container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/timeline/criticality/timeline-criticality');
      Terra.validates.screenshot('timeline_criticality');
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
        Terra.validates.screenshot('simple_panning_left_1');
        panningBtn.click();
        Terra.validates.screenshot('simple_panning_left_2');
        panningBtn.click();
        Terra.validates.screenshot('simple_panning_left_3');
      });
      it('validates panning right', () => {
        panningBtn = $('.button-pan-right');
        panningBtn.click();
        Terra.validates.screenshot('simple_panning_right_1');
        panningBtn.click();
        Terra.validates.screenshot('simple_panning_right_2');
        panningBtn.click();
        Terra.validates.screenshot('simple_panning_right_3');
      });
    });

    describe('dynamic data', () => {
      let panningBtn = null;

      beforeEach(() => {
        browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/timeline/reflow/dynamic-data');
      });
      it('validates dynaimcally updating of a dataset on left click', () => {
        panningBtn = $('.button-pan-left');
        panningBtn.click();
        Terra.validates.screenshot('dynamic_data_L1');
        panningBtn.click();
        Terra.validates.screenshot('dynamic_data_L2');
      });
      it('validates dynaimcally updating of a dataset on right click', () => {
        panningBtn = $('.button-pan-right');
        panningBtn.click();
        Terra.validates.screenshot('dynamic_data_R1');
        panningBtn.click();
        Terra.validates.screenshot('dynamic_data_R2');
      });
    });
  });
});
