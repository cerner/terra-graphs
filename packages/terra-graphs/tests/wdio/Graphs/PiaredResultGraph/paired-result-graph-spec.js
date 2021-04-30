Terra.describeViewports('PairedResultGraph ', ['tiny', 'medium', 'large'], () => {
  describe('Basic paired result graph', () => {
    it('validates legend item disable graph container', () => {
      browser.url('/raw/tests/terra-graphs/graphs/paired-result/basic-paired-result-graphs/legend-item-disable');
      Terra.validates.screenshot('legend_item_disable', { selector: '.carbon-graph-container' });
    });

    it('validates simple paired result graph container', () => {
      browser.url('/raw/tests/terra-graphs/graphs/paired-result/basic-paired-result-graphs/simple-paired-result');
      Terra.validates.screenshot('simple_paired_result', { selector: '.carbon-graph-container' });
    });

    it('validates timeseries graph container', () => {
      browser.url('/raw/tests/terra-graphs/graphs/paired-result/basic-paired-result-graphs/timeseries');
      Terra.validates.screenshot('timeseries', { selector: '.carbon-graph-container' });
    });

    it('validates timeseries with dateline graph container', () => {
      browser.url('/raw/tests/terra-graphs/graphs/paired-result/basic-paired-result-graphs/timeseries-with-dateline');
      Terra.validates.screenshot('timeseries_with_dateline', { selector: '.carbon-graph-container' });
    });

    it('validates timeseries with eventline graph container', () => {
      browser.url('/raw/tests/terra-graphs/graphs/paired-result/basic-paired-result-graphs/timeseries-with-eventline');
      Terra.validates.screenshot('timeseries_with_eventline', { selector: '.carbon-graph-container' });
    });

    it('validates y2-axis graph container', () => {
      browser.url('/raw/tests/terra-graphs/graphs/paired-result/basic-paired-result-graphs/y-2-axis');
      Terra.validates.screenshot('y2-axis', { selector: '.carbon-graph-container' });
    });
  });

  describe('Criticality', () => {
    it('validates criticality multiple graph container', () => {
      browser.url('/raw/tests/terra-graphs/graphs/paired-result/Criticality/multiple-paired-result');
      Terra.validates.screenshot('criticality_multiple_paired_result', { selector: '.carbon-graph-container' });
    });

    it('validates criticality simple graph container', () => {
      browser.url('/raw/tests/terra-graphs/graphs/paired-result/Criticality/simple-paired-result');
      Terra.validates.screenshot('criticality_simple_paired_result', { selector: '.carbon-graph-container' });
    });
  });

  describe('Regions', () => {
    it('validates simple region graph container', () => {
      browser.url('/raw/tests/terra-graphs/graphs/paired-result/regions/simple');
      Terra.validates.screenshot('region_simple', { selector: '.carbon-graph-container' });
    });

    it('validates value region graph container', () => {
      browser.url('/raw/tests/terra-graphs/graphs/paired-result/regions/value-region');
      Terra.validates.screenshot('value_region', { selector: '.carbon-graph-container' });
    });

    it('validates multiple region graph container', () => {
      browser.url('/raw/tests/terra-graphs/graphs/paired-result/regions/multiple-paired-result');
      Terra.validates.screenshot('multiple_region', { selector: '.carbon-graph-container' });
    });

    describe('when hovered on multiple line region legends', () => {
      let element = null;
      beforeEach(() => {
        browser.url('/raw/tests/terra-graphs/graphs/paired-result/regions/multiple-paired-result');
        element = $('.carbon-legend').$$('li');
      });

      it('validates graph container when hovered on first dataset high', () => {
        element[0].moveTo();
        Terra.validates.screenshot('multiple_region_hovered_on_first_data_high', { selector: '.carbon-graph-container' });
      });
      it('validates graph container when hovered on first dataset Low', () => {
        element[2].moveTo();
        Terra.validates.screenshot('multiple_region_hovered_on_first_data_low', { selector: '.carbon-graph-container' });
      });
      it('validates graph container when hovered on second dataset high', () => {
        element[3].moveTo();
        Terra.validates.screenshot('multiple_region_hovered_on_second_data_high', { selector: '.carbon-graph-container' });
      });
      it('validates graph container when hovered on second dataset low', () => {
        element[5].moveTo();
        Terra.validates.screenshot('multiple_region_hovered_on_second_data_low', { selector: '.carbon-graph-container' });
      });
    });
  });
});
