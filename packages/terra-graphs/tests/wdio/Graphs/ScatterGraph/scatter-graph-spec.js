Terra.describeViewports('ScatterGraph ', ['tiny', 'medium', 'large'], () => {
  describe('Basic Scatter graphs', () => {
    it('validates simple scatter graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/scatter-graph/basic-scatter-graphs/simple-scatter');
      Terra.validates.screenshot('simple_scatter', { selector: '.carbon-graph-container' });
    });

    it('validates timeseries graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/scatter-graph/basic-scatter-graphs/timeseries');
      Terra.validates.screenshot('timeseries', { selector: '.carbon-graph-container' });
    });

    it('validates timeseries with dateline graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/scatter-graph/basic-scatter-graphs/timeseries-with-dateline');
      Terra.validates.screenshot('timeseries_with_dateline', { selector: '.carbon-graph-container' });
    });

    it('validates timeseries with eventline graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/scatter-graph/basic-scatter-graphs/timeseries-with-eventline');
      Terra.validates.screenshot('timeseries_with_eventline', { selector: '.carbon-graph-container' });
    });

    it('validates y2-axis graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/scatter-graph/basic-scatter-graphs/y-2-axis');
      Terra.validates.screenshot('y2-axis', { selector: '.carbon-graph-container' });
    });
  });

  describe('Criticality', () => {
    it('validates criticality simple scatter graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/scatter-graph/criticality/simple');
      Terra.validates.screenshot('criticality_simple_scatter', { selector: '.carbon-graph-container' });
    });
  });

  describe('Reflow', () => {
    describe('simple panning', () => {
      let panningBtn = null;

      beforeEach(() => {
        browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/scatter-graph/reflow/simple-panning');
      });
      it('validates panning left', () => {
        panningBtn = $('.button-pan-left');
        panningBtn.click();
        Terra.validates.screenshot('simple_panning_left_1', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('simple_panning_left_2', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('simple_panning_left_3', { selector: '.carbon-graph-container' });
      });
      it('validates panning right', () => {
        panningBtn = $('.button-pan-right');
        panningBtn.click();
        Terra.validates.screenshot('simple_panning_right_1', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('simple_panning_right_2', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('simple_panning_right_3', { selector: '.carbon-graph-container' });
      });
    });

    describe('dynamic data', () => {
      let panningBtn = null;

      beforeEach(() => {
        browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/scatter-graph/reflow/dynamic-data');
      });
      it('validates dynaimcally updating of a dataset', () => {
        panningBtn = $('.button-pan-right');
        panningBtn.click();
        Terra.validates.screenshot('dynamic_data_1', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('dynamic_data_2', { selector: '.carbon-graph-container' });
      });
    });
  });
});
