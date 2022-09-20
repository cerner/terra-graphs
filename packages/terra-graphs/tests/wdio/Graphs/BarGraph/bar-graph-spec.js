Terra.describeViewports('BarGraph', ['tiny', 'medium', 'large'], () => {
  describe('Basic bar graphs', () => {
    it('validates Axis info text labels graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bar-graph/basic-bar-graphs/axis-info-text-labels');
      Terra.validates.screenshot('axis_info_text_labels');
    });

    it('validates grouped bars graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bar-graph/basic-bar-graphs/grouped-bars');
      Terra.validates.screenshot('grouped_bars');
    });

    it('validates negative bars graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bar-graph/basic-bar-graphs/negative-bars');
      Terra.validates.screenshot('negative_bars');
    });

    it('validates simple bar graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bar-graph/basic-bar-graphs/simple-bar');
      Terra.validates.screenshot('simple_Bar');
    });

    it('validates stacked axis info test labels graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bar-graph/basic-bar-graphs/stacked-axis-info-text-labels');
      Terra.validates.screenshot('stacked_axis_info_text_labels');
    });

    it('validates stacked bars graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bar-graph/basic-bar-graphs/stacked-bars');
      Terra.validates.screenshot('stacked_bars');
    });

    it('validates timeseries graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bar-graph/basic-bar-graphs/timeseries');
      Terra.validates.screenshot('timeseries');
    });

    it('validates timeseries with dateline graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bar-graph/basic-bar-graphs/timeseries-with-dateline');
      Terra.validates.screenshot('timeseries_With_dateline');
    });

    it('validates timeseries with eventline graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bar-graph/basic-bar-graphs/timeseries-with-eventline');
      Terra.validates.screenshot('timeseries_With_eventline');
    });
  });

  describe('Goal lines', () => {
    it('validates bar graph with grouped goal lines graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bar-graph/goal-line/grouped-goal-lines');
      Terra.validates.screenshot('grouped_goal_lines');
    });

    it('validates bar graph with simple goal line graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bar-graph/goal-line/simple-goal-lines');
      Terra.validates.screenshot('simple_goal_lines');
    });

    it('validates bar graph with stacked goal line graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bar-graph/goal-line/stacked-goal-lines');
      Terra.validates.screenshot('stacked_goal_lines');
    });
  });

  describe('Reflow', () => {
    let panningBtn = null;
    describe('Dynamic data', () => {
      beforeEach(() => {
        browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bar-graph/reflow/dynamic-data');
      });
      it('validates panning left', () => {
        panningBtn = $('.button-pan-left');
        panningBtn.click();
        Terra.validates.screenshot('bar_dynamic_data_panning_left_1');
        panningBtn.click();
        Terra.validates.screenshot('bar_dynamic_data_panning_left_2');
        panningBtn.click();
        Terra.validates.screenshot('bar_dynamic_data_panning_left_3');
      });
      it('validates panning right', () => {
        panningBtn = $('.button-pan-right');
        panningBtn.click();
        Terra.validates.screenshot('bar_dynamic_data_panning_right_1');
        panningBtn.click();
        Terra.validates.screenshot('bar_dynamic_data_panning_right_2');
        panningBtn.click();
        Terra.validates.screenshot('bar_dynamic_data_panning_right_3');
      });
    });
    describe('Dynamic eventline', () => {
      beforeEach(() => {
        browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bar-graph/reflow/dynamic-eventline');
      });
      it('validates panning left', () => {
        panningBtn = $('.button-pan-left');
        panningBtn.click();
        Terra.validates.screenshot('bar_dynamic_eventline_panning_left_1');
        panningBtn.click();
        Terra.validates.screenshot('bar_dynamic_eventline_panning_left_2');
        panningBtn.click();
        Terra.validates.screenshot('bar_dynamic_eventline_panning_left_3');
      });
      it('validates panning right', () => {
        panningBtn = $('.button-pan-right');
        panningBtn.click();
        Terra.validates.screenshot('bar_dynamic_eventline_panning_right_1');
        panningBtn.click();
        Terra.validates.screenshot('bar_dynamic_eventline_panning_right_2');
        panningBtn.click();
        Terra.validates.screenshot('bar_dynamic_eventline_panning_right_3');
      });
    });
    describe('Simple', () => {
      beforeEach(() => {
        browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bar-graph/reflow/simple-panning');
      });
      it('validates panning left', () => {
        panningBtn = $('.button-pan-left');
        panningBtn.click();
        Terra.validates.screenshot('bar_simple_panning_left_1');
        panningBtn.click();
        Terra.validates.screenshot('bar_simple_panning_left_2');
        panningBtn.click();
        Terra.validates.screenshot('bar_simple_panning_left_3');
      });
      it('validates panning right', () => {
        panningBtn = $('.button-pan-right');
        panningBtn.click();
        Terra.validates.screenshot('bar_simple_panning_right_1');
        panningBtn.click();
        Terra.validates.screenshot('bar_simple_panning_right_2');
        panningBtn.click();
        Terra.validates.screenshot('bar_simple_panning_right_3');
      });
    });
  });
});
