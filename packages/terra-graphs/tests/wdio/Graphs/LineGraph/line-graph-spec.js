Terra.describeViewports('LineGraph ', ['tiny', 'medium', 'large'], () => {
  describe('Basic line graphs', () => {
    it('validates dashed line graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/basic-line-graphs/dashed-line');
      Terra.validates.screenshot('dashed_line', { selector: '.carbon-graph-container' });
    });

    it('validates disable calibration graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/basic-line-graphs/disable-calibration');
      Terra.validates.screenshot('disable_calibration', { selector: '.carbon-graph-container' });
    });

    it('validates shapes hidden graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/basic-line-graphs/shapes-hidden');
      Terra.validates.screenshot('shapes_hidden', { selector: '.carbon-graph-container' });
    });

    it('validates show or hide shapes per dataset graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/basic-line-graphs/show-or-hide-shapes-per-dataset');
      Terra.validates.screenshot('show_or_hide_shapes_per_dataset', { selector: '.carbon-graph-container' });
    });

    it('validates simple line graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/basic-line-graphs/simple-line');
      Terra.validates.screenshot('simple_line', { selector: '.carbon-graph-container' });
    });

    it('validates timeseries graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/basic-line-graphs/timeseries');
      Terra.validates.screenshot('timeseries', { selector: '.carbon-graph-container' });
    });

    it('validates timeseries with dateline graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/basic-line-graphs/timeseries-with-dateline');
      Terra.validates.screenshot('timeseries_with_dateline', { selector: '.carbon-graph-container' });
    });

    it('validates timeseries with eventline graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/basic-line-graphs/timeseries-with-eventline');
      Terra.validates.screenshot('timeseries_with_eventline', { selector: '.carbon-graph-container' });
    });

    it('validates y2-axis graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/basic-line-graphs/y-2-axis');
      Terra.validates.screenshot('y2-axis', { selector: '.carbon-graph-container' });
    });
  });

  describe('Criticality', () => {
    it('validates criticality multi line graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/criticality/multi-line');
      Terra.validates.screenshot('criticality_multi_line', { selector: '.carbon-graph-container' });
    });

    it('validates criticality simple line graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/criticality/simple-line');
      Terra.validates.screenshot('criticality_simple_line', { selector: '.carbon-graph-container' });
    });
  });

  describe('Multi Line', () => {
    it('validates multi line graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/multi-line/simple');
      browser.pause(750 * 6);
      Terra.validates.screenshot('multi_line ', { selector: '.carbon-graph-container' });
    });
  });

  describe('Non-contiguous', () => {
    it('validates non contiguous simple graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/non-contiguous-line/simple');
      Terra.validates.screenshot('simple_non_contiguous', { selector: '.carbon-graph-container' });
    });
  });

  describe('Regions', () => {
    describe('Line', () => {
      it('validates multiple regions graph container', () => {
        browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/regions/line/multiple-regions');
        Terra.validates.screenshot('multiple_regions', { selector: '.carbon-graph-container' });
      });

      it('validates region no lower bound graph container', () => {
        browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/regions/line/no-lower-bound');
        Terra.validates.screenshot('region_no_lower-bound', { selector: '.carbon-graph-container' });
      });

      it('validates region no upper bound graph container', () => {
        browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/regions/line/no-upper-bound');
        Terra.validates.screenshot('region_no_upper_bound', { selector: '.carbon-graph-container' });
      });

      it('validates regions line graph container', () => {
        browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/regions/line/regions-line');
        Terra.validates.screenshot('regions_line', { selector: '.carbon-graph-container' });
      });

      it('validates simple region graph container', () => {
        browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/regions/line/simple');
        Terra.validates.screenshot('simple_region', { selector: '.carbon-graph-container' });
      });

      it('validates value region graph container', () => {
        browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/regions/line/value-region');
        Terra.validates.screenshot('value_region', { selector: '.carbon-graph-container' });
      });
      describe('Y2-Axis', () => {
        beforeEach(() => browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/regions/line/y-2-axis'));

        it('validates y2-axis graph container', () => {
          browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/regions/line/y-2-axis');
          Terra.validates.screenshot('region_y2-axis', { selector: '.carbon-graph-container' });
        });

        it('validates y2-axis graph container when hovered on legend', () => {
          browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/regions/line/y-2-axis');
          Terra.validates.screenshot('region_y2-axis_when_hovered_on_legend', { selector: '.carbon-graph-container' });
        });
      });
    });

    describe('Multi line', () => {
      it('validates dataset region identical graph container', () => {
        browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/regions/multi-line/dataset-region-identical');
        Terra.validates.screenshot('multiline_dataset_region_identical', { selector: '.carbon-graph-container' });
      });

      it('validates multiple line region graph container', () => {
        browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/regions/multi-line/multi-line');
        Terra.validates.screenshot('multiple_line_region', { selector: '.carbon-graph-container' });
      });

      describe('when hovered on multiple line region legends', () => {
        let element = null;
        beforeEach(() => {
          browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/regions/multi-line/multi-line');
          element = $('.carbon-legend').$$('li');
        });
        it('validates graph container when hovered on data label 1', () => {
          element[0].moveTo();
          Terra.validates.screenshot('multiple_line_region_hovered_on_data_label_1', { selector: '.carbon-graph-container' });
        });
        it('validates graph container when hovered on data label 3', () => {
          element[1].moveTo();
          Terra.validates.screenshot('multiple_line_region_hovered_on_data_label_3', { selector: '.carbon-graph-container' });
        });

        it('validates graph container when hovered on data label 5', () => {
          element[2].moveTo();
          Terra.validates.screenshot('multiple_line_region_hovered_on_data_label_5', { selector: '.carbon-graph-container' });
        });
      });
    });

    describe('Spline', () => {
      it('validates spline region graph container', () => {
        browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/regions/spline/value-region');
        Terra.validates.screenshot('value_region', { selector: '.carbon-graph-container' });
      });
    });
  });

  describe('Spline', () => {
    it('validates simple spline graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/spline/simple-spline');
      Terra.validates.screenshot('simple_spline', { selector: '.carbon-graph-container' });
    });
  });

  describe('Reflow', () => {
    describe('simple panning', () => {
      let panningBtn = null;

      beforeEach(() => {
        browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/reflow/simple-panning');
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
        browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/reflow/dynamic-data');
      });
      it('validates dynaimcally updating of a dataset', () => {
        panningBtn = $('.button-pan-right');
        panningBtn.click();
        Terra.validates.screenshot('dynamic_data_1', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('dynamic_data_2', { selector: '.carbon-graph-container' });
      });
    });

    describe('multiple datasets', () => {
      let panningBtn = null;

      beforeEach(() => {
        browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/reflow/multiple-datasets');
      });
      it('validates dynaimcally updating of multiple datasets', () => {
        panningBtn = $('.button-pan-right');
        panningBtn.click();
        Terra.validates.screenshot('multiple_dataset_1', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('multiple_dataset_2', { selector: '.carbon-graph-container' });
      });
    });

    describe('dynamic eventline', () => {
      let panningBtn = null;

      beforeEach(() => {
        browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/reflow/dynamic-eventline');
      });
      it('validates eventline dynaimcally updating', () => {
        panningBtn = $('.button-pan-right');
        panningBtn.click();
        Terra.validates.screenshot('dynamic_eventline_1', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('dynamic_eventline_2', { selector: '.carbon-graph-container' });
      });
    });

    describe('legend update', () => {
      let panningBtn = null;

      beforeEach(() => {
        browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/reflow/dynamic-legend');
      });
      it('validates eventline dynaimcally updating', () => {
        panningBtn = $('.button-pan-right');
        panningBtn.click();
        Terra.validates.screenshot('legend_update_1', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('legend_update_2', { selector: '.carbon-graph-container' });
      });
    });

    describe('y2 panning', () => {
      let panningBtn = null;

      beforeEach(() => {
        browser.url('/raw/tests/terra-graphs-docs/graphs/line-graph/reflow/y-2-panning');
      });
      it('validates panning left with y2 axis', () => {
        panningBtn = $('.button-pan-left');
        panningBtn.click();
        Terra.validates.screenshot('y2_panning_left_1', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('y2_panning_left_2', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('y2_panning_left_3', { selector: '.carbon-graph-container' });
      });
      it('validates panning right with y2 axis', () => {
        panningBtn = $('.button-pan-right');
        panningBtn.click();
        Terra.validates.screenshot('y2_panning_right_1', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('y2_panning_right_2', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('y2_panning_right_3', { selector: '.carbon-graph-container' });
      });
    });
  });
});
