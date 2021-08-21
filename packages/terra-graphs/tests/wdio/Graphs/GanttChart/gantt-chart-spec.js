Terra.describeViewports(' GanttCharts', ['tiny', 'medium', 'large'], () => {
  describe('Basic Gantt charts', () => {
    it('validates Gantt actions graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/gantt-chart/basic-gantt-charts/actions');
      Terra.validates.screenshot('gantt_actions', { selector: '.carbon-graph-container' });
    });

    it('validates Bar types graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/gantt-chart/basic-gantt-charts/bar-types');
      Terra.validates.screenshot('gantt_bar_types', { selector: '.carbon-graph-container' });
    });

    it('validates Gantt Datetime bucket graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/gantt-chart/basic-gantt-charts/datetime-bucket');
      Terra.validates.screenshot('gantt_datetime_bucket', { selector: '.carbon-graph-container' });
    });

    it('validates Gantt Eventline graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/gantt-chart/basic-gantt-charts/eventline');
      Terra.validates.screenshot('gantt_eventline', { selector: '.carbon-graph-container' });
    });

    it('validates Gantt events graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/gantt-chart/basic-gantt-charts/events');
      Terra.validates.screenshot('gantt_events', { selector: '.carbon-graph-container' });
    });

    it('validates Gantt graph and legend reduced padding graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/gantt-chart/basic-gantt-charts/graph-and-legend-padding-reduced');
      Terra.validates.screenshot('gantt_graph_and_legend_reduced_padding', { selector: '.carbon-graph-container' });
    });
    describe('Label truncation', () => {
      beforeEach(() => browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/gantt-chart/basic-gantt-charts/label-truncation'));
      it('validates Gantt label truncation graph container', () => {
        Terra.validates.screenshot('gantt_label_truncation_graph_container', { selector: '.carbon-graph-container' });
      });

      it('validates label truncation graph container when clicked on label', () => {
        $('.carbon-y-axis-track-label').$('.tick').$('text').click();
        Terra.validates.screenshot('gantt_label_truncation_when_clicked_on_label', { selector: '.carbon-graph-container' });
      });
    });

    it('validates Gantt percentage graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/gantt-chart/basic-gantt-charts/percentage');
      Terra.validates.screenshot('gantt_percentage', { selector: '.carbon-graph-container' });
    });

    it('validates Simple Gantt graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/gantt-chart/basic-gantt-charts/simple-gantt');
      Terra.validates.screenshot('simple_gantt', { selector: '.carbon-graph-container' });
    });

    it('validates Gantt tasks and acttivities graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/gantt-chart/basic-gantt-charts/tasks-and-activities');
      Terra.validates.screenshot('gantt_tasks_and_acttivities', { selector: '.carbon-graph-container' });
    });

    it('validates Gantt track selection graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/gantt-chart/basic-gantt-charts/track-selection');
      Terra.validates.screenshot('gantt_track_selection', { selector: '.carbon-graph-container' });
    });
  });

  describe('Reflow', () => {
    let panningBtn = null;
    describe('Dynamic data', () => {
      beforeEach(() => {
        browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/gantt-chart/reflow/dynamic-data');
      });
      it('validates panning left', () => {
        panningBtn = $('.button-pan-left');
        panningBtn.click();
        Terra.validates.screenshot('gantt_dynamic_data_panning_left_1', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('gantt_dynamic_data_panning_left_2', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('gantt_dynamic_data_panning_left_3', { selector: '.carbon-graph-container' });
      });
      it('validates panning right', () => {
        panningBtn = $('.button-pan-right');
        panningBtn.click();
        Terra.validates.screenshot('gantt_dynamic_data_panning_right_1', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('gantt_dynamic_data_panning_right_2', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('gantt_dynamic_data_panning_right_3', { selector: '.carbon-graph-container' });
      });
    });
    describe('Dynamic eventline', () => {
      beforeEach(() => {
        browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/gantt-chart/reflow/dynamic-eventline');
      });
      it('validates panning left', () => {
        panningBtn = $('.button-pan-left');
        panningBtn.click();
        Terra.validates.screenshot('gantt_dynamic_eventline_panning_left_1', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('gantt_dynamic_eventline_panning_left_2', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('gantt_dynamic_eventline_panning_left_3', { selector: '.carbon-graph-container' });
      });
      it('validates panning right', () => {
        panningBtn = $('.button-pan-right');
        panningBtn.click();
        Terra.validates.screenshot('gantt_dynamic_eventline_panning_right_1', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('gantt_dynamic_eventline_panning_right_2', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('gantt_dynamic_eventline_panning_right_3', { selector: '.carbon-graph-container' });
      });
    });
    describe('Multiple Datasets', () => {
      beforeEach(() => {
        browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/gantt-chart/reflow/multiple-datasets');
      });
      it('validates panning left', () => {
        panningBtn = $('.button-pan-left');
        panningBtn.click();
        Terra.validates.screenshot('gantt_multiple_datasets_panning_left_1', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('gantt_multiple_datasets_panning_left_2', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('gantt_multiple_datasets_panning_left_3', { selector: '.carbon-graph-container' });
      });
      it('validates panning right', () => {
        panningBtn = $('.button-pan-right');
        panningBtn.click();
        Terra.validates.screenshot('gantt_multiple_datasets_panning_right_1', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('gantt_multiple_datasets_panning_right_2', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('gantt_multiple_datasets_panning_right_3', { selector: '.carbon-graph-container' });
      });
    });
    describe('Simple', () => {
      beforeEach(() => {
        browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/gantt-chart/reflow/simple-panning');
      });
      it('validates panning left', () => {
        panningBtn = $('.button-pan-left');
        panningBtn.click();
        Terra.validates.screenshot('gantt_simple_panning_left_1', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('gantt_simple_panning_left_2', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('gantt_simple_panning_left_3', { selector: '.carbon-graph-container' });
      });
      it('validates panning right', () => {
        panningBtn = $('.button-pan-right');
        panningBtn.click();
        Terra.validates.screenshot('gantt_simple_panning_right_1', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('gantt_simple_panning_right_2', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('gantt_simple_panning_right_3', { selector: '.carbon-graph-container' });
      });
    });
  });
});
