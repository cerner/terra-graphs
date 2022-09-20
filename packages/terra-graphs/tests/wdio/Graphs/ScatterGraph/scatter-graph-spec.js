Terra.describeViewports('ScatterGraph ', ['tiny', 'medium', 'large'], () => {
  describe('Basic Scatter graphs', () => {
    it('validates simple scatter graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/scatter-graph/basic-scatter-graphs/simple-scatter');
      Terra.validates.screenshot('simple_scatter');
    });

    it('validates timeseries graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/scatter-graph/basic-scatter-graphs/timeseries');
      Terra.validates.screenshot('timeseries');
    });

    it('validates timeseries with dateline graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/scatter-graph/basic-scatter-graphs/timeseries-with-dateline');
      Terra.validates.screenshot('timeseries_with_dateline');
    });

    it('validates timeseries with eventline graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/scatter-graph/basic-scatter-graphs/timeseries-with-eventline');
      Terra.validates.screenshot('timeseries_with_eventline');
    });

    it('validates y2-axis graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/scatter-graph/basic-scatter-graphs/y-2-axis');
      Terra.validates.screenshot('y2-axis');
    });
  });

  describe('Criticality', () => {
    it('validates criticality simple scatter graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/scatter-graph/criticality/simple');
      Terra.validates.screenshot('criticality_simple_scatter');
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
        browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/scatter-graph/reflow/dynamic-data');
      });
      it('validates dynaimcally updating of a dataset', () => {
        panningBtn = $('.button-pan-right');
        panningBtn.click();
        Terra.validates.screenshot('dynamic_data_1');
        panningBtn.click();
        Terra.validates.screenshot('dynamic_data_2');
      });
    });
  });
});
