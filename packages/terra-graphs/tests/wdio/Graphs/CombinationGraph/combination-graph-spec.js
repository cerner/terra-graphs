Terra.describeViewports('CombinationGraph', ['tiny', 'medium', 'large'], () => {
  describe('Basic Combination graphs', () => {
    it('validates Bar graph with Line graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/combination/basic-combination-graphs/bar-graph-with-line');
      Terra.validates.screenshot('bar_graph_with_line');
    });

    it('validates Line with multiple Bubble data  graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/combination/basic-combination-graphs/line-with-multiple-bubble-data');
      Terra.validates.screenshot('line_with_multiple_bubble_data');
    });

    it('validates Line with Paired result graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/combination/basic-combination-graphs/line-with-paired-result');
      Terra.validates.screenshot('line_with_paired_result');
    });

    it('validates Line with single Bubble data graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/combination/basic-combination-graphs/line-with-single-bubble-data');
      Terra.validates.screenshot('line_with_single_bubble_data');
    });

    it('validates Paired result with Scatter graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/combination/basic-combination-graphs/paired-result-with-scatter');
      Terra.validates.screenshot('paired_result_with_scatter');
    });
  });

  describe('Regions', () => {
    describe('when hovered on multiple graph region legends', () => {
      let element = null;
      beforeEach(() => {
        browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/combination/regions/simple');
        element = $('.carbon-legend').$$('li');
      });
      it('validates graph container when hovered on Line legend', () => {
        element[0].moveTo();
        Terra.validates.screenshot('simple_combination_region_hovered_on_line_legend');
      });
      it('validates graph container when hovered on Paired result high legend', () => {
        element[1].moveTo();
        Terra.validates.screenshot('simple_combination_region_hovered_on_paired_result_high_legend');
      });

      it('validates graph container when hovered on Paired result low legend', () => {
        element[3].moveTo();
        Terra.validates.screenshot('simple_combination_region_hovered_on_paired_result_low_legend');
      });
    });
    it('validates dataset region identical graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/combination/regions/dataset-region-identical');
      Terra.validates.screenshot('dataset_region_identical');
    });
  });
});
