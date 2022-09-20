Terra.describeViewports('Bubble graphs', ['tiny', 'medium', 'large'], () => {
  describe('Validates', () => {
    it('single dataset graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bubble-graph/single-dataset/single-dataset');
      Terra.validates.screenshot('single-dataset');
    });

    it('color based graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bubble-graph/single-dataset/color-based-graph');
      Terra.validates.screenshot('color-based-graph');
    });

    it('weight based graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bubble-graph/single-dataset/weight-based-graph');
      Terra.validates.screenshot('weight-based-graph');
    });

    it('weight color based graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bubble-graph/single-dataset/weight-color-based-graph');
      Terra.validates.screenshot('weight-color-based-graph');
    });

    it('custom weight graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bubble-graph/single-dataset/custom-weight-graph');
      Terra.validates.screenshot('custom-weight-graph');
    });

    it('multiple dataset graph container', () => {
      browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bubble-graph/multiple-datasets/multiple-dataset');
      Terra.validates.screenshot('multiple-dataset');
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
        Terra.validates.screenshot('bubble_dynamic_data_panning_left_1');
        panningBtn.click();
        Terra.validates.screenshot('bubble_dynamic_data_panning_left_2');
        panningBtn.click();
        Terra.validates.screenshot('bubble_dynamic_data_panning_left_3');
      });
      it('validates panning right', () => {
        panningBtn = $('.button-pan-right');
        panningBtn.click();
        Terra.validates.screenshot('bubble_dynamic_data_panning_right_1');
        panningBtn.click();
        Terra.validates.screenshot('bubble_dynamic_data_panning_right_2');
        panningBtn.click();
        Terra.validates.screenshot('bubble_dynamic_data_panning_right_3');
      });
    });
    describe('Multiple Datasets', () => {
      beforeEach(() => {
        browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bubble-graph/reflow/multiple-datasets');
      });
      it('validates panning left', () => {
        panningBtn = $('.button-pan-left');
        panningBtn.click();
        Terra.validates.screenshot('bubble_multiple_datasets_panning_left_1');
        panningBtn.click();
        Terra.validates.screenshot('bubble_multiple_datasets_panning_left_2');
        panningBtn.click();
        Terra.validates.screenshot('bubble_multiple_datasets_panning_left_3');
      });
      it('validates panning right', () => {
        panningBtn = $('.button-pan-right');
        panningBtn.click();
        Terra.validates.screenshot('bubble_multiple_datasets_panning_right_1');
        panningBtn.click();
        Terra.validates.screenshot('bubble_multiple_datasets_panning_right_2');
        panningBtn.click();
        Terra.validates.screenshot('bubble_multiple_datasets_panning_right_3');
      });
    });
    describe('Simple', () => {
      beforeEach(() => {
        browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/bubble-graph/reflow/simple-panning');
      });
      it('validates panning left', () => {
        panningBtn = $('.button-pan-left');
        panningBtn.click();
        Terra.validates.screenshot('bubble_simple_panning_left_1');
        panningBtn.click();
        Terra.validates.screenshot('bubble_simple_panning_left_2');
        panningBtn.click();
        Terra.validates.screenshot('bubble_simple_panning_left_3');
      });
      it('validates panning right', () => {
        panningBtn = $('.button-pan-right');
        panningBtn.click();
        Terra.validates.screenshot('bubble_simple_panning_right_1');
        panningBtn.click();
        Terra.validates.screenshot('bubble_simple_panning_right_2');
        panningBtn.click();
        Terra.validates.screenshot('bubble_simple_panning_right_3');
      });
    });
  });
});
