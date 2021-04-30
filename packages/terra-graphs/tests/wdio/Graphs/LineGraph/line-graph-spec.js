Terra.describeViewports('LineGraph ', ['tiny', 'medium', 'large'], () => {
  describe('Basic line graphs', () => {
    it('validates dashed line graph container', () => {
      browser.url('/raw/tests/terra-graphs/graphs/line-graph/basic-line-graphs/dashed-line');
      Terra.validates.screenshot('dashed_line', { selector: '.carbon-graph-container' });
    });

    it('validates disable calibration graph container', () => {
      browser.url('/raw/tests/terra-graphs/graphs/line-graph/basic-line-graphs/disable-calibration');
      Terra.validates.screenshot('disable_calibration', { selector: '.carbon-graph-container' });
    });

    it('validates shapes hidden graph container', () => {
      browser.url('/raw/tests/terra-graphs/graphs/line-graph/basic-line-graphs/shapes-hidden');
      Terra.validates.screenshot('shapes_hidden', { selector: '.carbon-graph-container' });
    });

    it('validates show or hide shapes per dataset graph container', () => {
      browser.url('/raw/tests/terra-graphs/graphs/line-graph/basic-line-graphs/show-or-hide-shapes-per-dataset');
      Terra.validates.screenshot('show_or_hide_shapes_per_dataset', { selector: '.carbon-graph-container' });
    });

    it('validates simple line graph container', () => {
      browser.url('/raw/tests/terra-graphs/graphs/line-graph/basic-line-graphs/simple-line');
      Terra.validates.screenshot('simple_line', { selector: '.carbon-graph-container' });
    });

    it('validates timeseries graph container', () => {
      browser.url('/raw/tests/terra-graphs/graphs/line-graph/basic-line-graphs/timeseries');
      Terra.validates.screenshot('timeseries', { selector: '.carbon-graph-container' });
    });

    it('validates timeseries with dateline graph container', () => {
      browser.url('/raw/tests/terra-graphs/graphs/line-graph/basic-line-graphs/timeseries-with-dateline');
      Terra.validates.screenshot('timeseries_with_dateline', { selector: '.carbon-graph-container' });
    });

    it('validates timeseries with eventline graph container', () => {
      browser.url('/raw/tests/terra-graphs/graphs/line-graph/basic-line-graphs/timeseries-with-eventline');
      Terra.validates.screenshot('timeseries_with_eventline', { selector: '.carbon-graph-container' });
    });

    it('validates y2-axis graph container', () => {
      browser.url('/raw/tests/terra-graphs/graphs/line-graph/basic-line-graphs/y-2-axis');
      Terra.validates.screenshot('y2-axis', { selector: '.carbon-graph-container' });
    });
  });

  describe('Criticaliy', () => {
    it('validates criticality multi line graph container', () => {
      browser.url('/raw/tests/terra-graphs/graphs/line-graph/criticality/multi-line');
      Terra.validates.screenshot('criticality_multi_line', { selector: '.carbon-graph-container' });
    });

    it('validates criticality simple line graph container', () => {
      browser.url('/raw/tests/terra-graphs/graphs/line-graph/criticality/simple-line');
      Terra.validates.screenshot('criticality_simple_line', { selector: '.carbon-graph-container' });
    });
  });

  describe('Multi Line', () => {
    it('validates multi line graph container', () => {
      browser.url('/raw/tests/terra-graphs/graphs/line-graph/multi-line/simple');
      browser.pause(750 * 6);
      Terra.validates.screenshot('multi_line ', { selector: '.carbon-graph-container' });
    });
  });

  describe('Non-contiguous', () => {
    it('validates non contiguous simple graph container', () => {
      browser.url('/raw/tests/terra-graphs/graphs/line-graph/non-contiguous-line/simple');
      Terra.validates.screenshot('simple_non_contiguous', { selector: '.carbon-graph-container' });
    });
  });

  describe('Regions', () => {
    describe('Line', () => {
      it('validates multiple regions graph container', () => {
        browser.url('/raw/tests/terra-graphs/graphs/line-graph/regions/line/multiple-regions');
        Terra.validates.screenshot('multiple_regions', { selector: '.carbon-graph-container' });
      });

      it('validates region no lower bound graph container', () => {
        browser.url('/raw/tests/terra-graphs/graphs/line-graph/regions/line/no-lower-bound');
        Terra.validates.screenshot('region_no_lower-bound', { selector: '.carbon-graph-container' });
      });

      it('validates region no upper bound graph container', () => {
        browser.url('/raw/tests/terra-graphs/graphs/line-graph/regions/line/no-upper-bound');
        Terra.validates.screenshot('region_no_upper_bound', { selector: '.carbon-graph-container' });
      });

      it('validates regions line graph container', () => {
        browser.url('/raw/tests/terra-graphs/graphs/line-graph/regions/line/regions-line');
        Terra.validates.screenshot('regions_line', { selector: '.carbon-graph-container' });
      });

      it('validates simple region graph container', () => {
        browser.url('/raw/tests/terra-graphs/graphs/line-graph/regions/line/simple');
        Terra.validates.screenshot('simple_region', { selector: '.carbon-graph-container' });
      });

      it('validates value region graph container', () => {
        browser.url('/raw/tests/terra-graphs/graphs/line-graph/regions/line/value-region');
        Terra.validates.screenshot('value_region', { selector: '.carbon-graph-container' });
      });
      describe('Y2-Axis', () => {
        beforeEach(() => browser.url('/raw/tests/terra-graphs/graphs/line-graph/regions/line/y-2-axis'));

        it('validates y2-axis graph container', () => {
          browser.url('/raw/tests/terra-graphs/graphs/line-graph/regions/line/y-2-axis');
          Terra.validates.screenshot('region_y2-axis', { selector: '.carbon-graph-container' });
        });

        it('validates y2-axis graph container when hovered on legend', () => {
          browser.url('/raw/tests/terra-graphs/graphs/line-graph/regions/line/y-2-axis');
          Terra.validates.screenshot('region_y2-axis_when_hovered_on_legend', { selector: '.carbon-graph-container' });
        });
      });
    });

    describe('Multi line', () => {
      it('validates dataset region identical graph container', () => {
        browser.url('/raw/tests/terra-graphs/graphs/line-graph/regions/multi-line/dataset-region-identical');
        Terra.validates.screenshot('multiline_dataset_region_identical', { selector: '.carbon-graph-container' });
      });

      it('validates multiple line region graph container', () => {
        browser.url('/raw/tests/terra-graphs/graphs/line-graph/regions/multi-line/multi-line');
        Terra.validates.screenshot('multiple_line_region', { selector: '.carbon-graph-container' });
      });

      describe('when hovered on multiple line region legends', () => {
        let element = null;
        beforeEach(() => {
          browser.url('/raw/tests/terra-graphs/graphs/line-graph/regions/multi-line/multi-line');
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
        browser.url('/raw/tests/terra-graphs/graphs/line-graph/regions/spline/value-region');
        Terra.validates.screenshot('value_region', { selector: '.carbon-graph-container' });
      });
    });
  });

  describe('Spline', () => {
    it('validates simple spline graph container', () => {
      browser.url('/raw/tests/terra-graphs/graphs/line-graph/spline/simple-spline');
      Terra.validates.screenshot('simple_spline', { selector: '.carbon-graph-container' });
    });
  });
});