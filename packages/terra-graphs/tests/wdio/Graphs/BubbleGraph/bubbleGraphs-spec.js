Terra.describeViewports('Bubble graphs', ['tiny', 'medium', 'large'], () => {
  describe('Validates', () => {
    it('single dataset graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bubble-graph/single-dataset/single-dataset');
      Terra.validates.screenshot('single-dataset', { selector: '.carbon-graph-container' });
    });

    it('color based graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bubble-graph/single-dataset/color-based-graph');
      Terra.validates.screenshot('color-based-graph', { selector: '.carbon-graph-container' });
    });

    it('weight based graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bubble-graph/single-dataset/weight-based-graph');
      Terra.validates.screenshot('weight-based-graph', { selector: '.carbon-graph-container' });
    });

    it('weight color based graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bubble-graph/single-dataset/weight-color-based-graph');
      Terra.validates.screenshot('weight-color-based-graph', { selector: '.carbon-graph-container' });
    });

    it('custom weight graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bubble-graph/single-dataset/custom-weight-graph');
      Terra.validates.screenshot('custom-weight-graph', { selector: '.carbon-graph-container' });
    });

    it('multiple dataset graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bubble-graph/multiple-datasets/multiple-dataset');
      Terra.validates.screenshot('multiple-dataset', { selector: '.carbon-graph-container' });
    });
  });

  describe('Reflow', () => {
    let panningBtn = null;
    describe('Dynamic data', () => {
      beforeEach(() => {
        browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bubble-graph/reflow/dynamic-data');
      });
      it('validates panning left', () => {
        panningBtn = $('.button-pan-left');
        panningBtn.click();
        Terra.validates.screenshot('bubble_dynamic_data_panning_left_1', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('bubble_dynamic_data_panning_left_2', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('bubble_dynamic_data_panning_left_3', { selector: '.carbon-graph-container' });
      });
      it('validates panning right', () => {
        panningBtn = $('.button-pan-right');
        panningBtn.click();
        Terra.validates.screenshot('bubble_dynamic_data_panning_right_1', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('bubble_dynamic_data_panning_right_2', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('bubble_dynamic_data_panning_right_3', { selector: '.carbon-graph-container' });
      });
    });
    describe('Multiple Datasets', () => {
      beforeEach(() => {
        browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bubble-graph/reflow/multiple-datasets');
      });
      it('validates panning left', () => {
        panningBtn = $('.button-pan-left');
        panningBtn.click();
        Terra.validates.screenshot('bubble_multiple_datasets_panning_left_1', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('bubble_multiple_datasets_panning_left_2', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('bubble_multiple_datasets_panning_left_3', { selector: '.carbon-graph-container' });
      });
      it('validates panning right', () => {
        panningBtn = $('.button-pan-right');
        panningBtn.click();
        Terra.validates.screenshot('bubble_multiple_datasets_panning_right_1', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('bubble_multiple_datasets_panning_right_2', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('bubble_multiple_datasets_panning_right_3', { selector: '.carbon-graph-container' });
      });
    });
    describe('Simple', () => {
      beforeEach(() => {
        browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bubble-graph/reflow/simple-panning');
      });
      it('validates panning left', () => {
        panningBtn = $('.button-pan-left');
        panningBtn.click();
        Terra.validates.screenshot('bubble_simple_panning_left_1', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('bubble_simple_panning_left_2', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('bubble_simple_panning_left_3', { selector: '.carbon-graph-container' });
      });
      it('validates panning right', () => {
        panningBtn = $('.button-pan-right');
        panningBtn.click();
        Terra.validates.screenshot('bubble_simple_panning_right_1', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('bubble_simple_panning_right_2', { selector: '.carbon-graph-container' });
        panningBtn.click();
        Terra.validates.screenshot('bubble_simple_panning_right_3', { selector: '.carbon-graph-container' });
      });
    });
  });
});
