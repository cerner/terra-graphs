Terra.describeViewports('General', ['tiny', 'medium', 'large'], () => {
  describe('Axes', () => {
    it('validates datetime bucket graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/general/axes/datetime-bucket');
      Terra.validates.screenshot('datetime_bucket');
    });

    it('validates label hidden graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/general/axes/label-hidden');
      Terra.validates.screenshot('label_hidden');
    });
    describe('Label truncation', () => {
      beforeEach(() => browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/general/axes/label-truncation'));
      it('validates label truncation graph container', () => {
        Terra.validates.screenshot('label_truncation_with_no_click');
      });

      it('validates label truncation graph container when clicked on x-axis label', () => {
        $('.carbon-x-axis-label').click();
        Terra.validates.screenshot('label_truncation_when_clicked_on_x-axis');
      });

      it('validates label truncation graph container when clicked on y-axis label', () => {
        $('.carbon-y-axis-label').click();
        Terra.validates.screenshot('label_truncation_when_clicked_on_y-axis');
      });

      it('validates label truncation graph container when clicked on y2-axis label', () => {
        $('.carbon-y2-axis-label').click();
        Terra.validates.screenshot('label_truncation_when_clicked_on_y2-axis');
      });
    });

    it('validates static x-axis ticks graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/general/axes/static-x-axis-ticks');
      Terra.validates.screenshot('static_x_axis_ticks');
    });

    it('validates supress tick values trailing zero graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/general/axes/suppress-Tick-Value-Trailing-Zero');
      Terra.validates.screenshot('supress_tick_values_trailing_zero');
    });

    it('validates x-axis alternate locale graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/general/axes/x-axis-alternate-locale');
      Terra.validates.screenshot('x-axis_alternate_locale');
    });

    it('validates x-axis hidden graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/general/axes/x-axis-hidden');
      Terra.validates.screenshot('x-axis_hidden ');
    });

    it('validates x-axis orientation top graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/general/axes/x-axis-orientation-top');
      Terra.validates.screenshot('x-axis_orientation_top');
    });

    it('validates x-axis ticks formatted graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/general/axes/x-axis-ticks-formatted');
      Terra.validates.screenshot('x-axis_ticks_formatted');
    });

    it('validates timeseries x-axis allowCalibration disabled graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/general/axes/allow-calibration-disabled-timeseries-x-axis');
      Terra.validates.screenshot('x-axis_timeseries_allowcalibration_disabled');
    });

    it('validates x-axis allowCalibration disabled graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/general/axes/allow-calibration-disabled-x-axis');
      Terra.validates.screenshot('x-axis_allowcalibration_disabled');
    });
    it('validates y-axis allowCalibration disabled graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/general/axes/allow-calibration-disabled-y-axis');
      Terra.validates.screenshot('y-axis_allowcalibration_disabled');
    });

    it('validates timeseries x-axis allowCalibration enabled graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/general/axes/allow-calibration-enabled-timeseries-x-axis');
      Terra.validates.screenshot('x-axis_timeseries_allowcalibration_enabled');
    });

    it('validates x-axis allowCalibration enabled graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/general/axes/allow-calibration-enabled-x-axis');
      Terra.validates.screenshot('x-axis_allowcalibration_enabled');
    });
    it('validates y-axis allowCalibration enabled graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/general/axes/allow-calibration-enabled-y-axis');
      Terra.validates.screenshot('y-axis_allowcalibration_enabled');
    });

    it('validates Y-axis hidden graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/general/axes/y-axis-hidden');
      Terra.validates.screenshot('y-axis_hidden');
    });
  });

  describe('Grid', () => {
    it('validates horizontal grid hidden graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/general/grid/horizontal-grid-hidden');
      Terra.validates.screenshot('horizontal_grid_hidden');
    });

    it('validates vertical grid hidden graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/general/grid/vertical-grid-hidden');
      Terra.validates.screenshot('vertical_grid_hidden');
    });
  });

  describe('Legend', () => {
    it('validates legend hidden graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/general/legend/legend-hidden');
      Terra.validates.screenshot('legend_hidden');
    });

    it('validates legend item disable graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/general/legend/legend-item-disabled');
      Terra.validates.screenshot('legend_item-disable');
    });

    it('validates legend with legend options graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/general/legend/line-with-legend-option');
      Terra.validates.screenshot('legend_with_legend_options');
    });
  });

  describe('Other', () => {
    it('validates background color graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/general/other/background-color');
      Terra.validates.screenshot('background_color');
    });

    it('validates no data graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/general/other/no-data');
      Terra.validates.screenshot('no_data');
    });
  });

  describe('Legend', () => {
    it('validates custom legend placement graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/general/padding/custom-legend-placement');
      Terra.validates.screenshot('custom_legend_placement');
    });

    it('validates graph and legend padding reduced graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/general/padding/graph-and-legend-padding-reduced');
      const element = $('.carbon-axis-y');
      element.moveTo();
      Terra.validates.screenshot('graph_and_legend_padding_reduced');
    });
  });
});
