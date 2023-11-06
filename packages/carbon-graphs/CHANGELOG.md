# ChangeLog

## Unreleased
* Fixed
  * Fixed tick values overlapping on X-axis by rotating 15,30,45.

## 2.23.3 - (September 25, 2023)

* Fixed
  * Unlocked `d3-transition` and removed `d3-dispatch` dependency to fix transition reference error.

## 2.23.2 - (September 20, 2023)

* Fixed
  * Fixed transition reference error by adding the missing `d3-dispatch` dependency.

## 2.23.1 - (August 21, 2023)

* Fixed
  * Fixed infinite padding in line graphs on multiple unload/load where maximum datapoint is zero.
  * Fixed tick lines overflowing outside the grid container when using custom tick values.

* Changed
  * Updated d3 dependencies to only pull in the necessary modules.
  * Removed dependency on `d3-color@1` which has a known CVE issue. 

## 2.23.0 - (March 29, 2023)

* Added
  * Added logic to increase legend icon size when an icon is used in the legend without a line.

## 2.22.0 - (September 13, 2022)

* Added
  * Added support for `config.axis.x.allowCalibration` for a line graph with a numerical and timeseries x-axis.
  * Added support for `config.axis.x.allowCalibration` for a paired result graph with a numerical and timeseries x-axis.
  * Added support for `config.axis.x.allowCalibration` for a scatter graph with a numerical and timeseries x-axis.
  * Added support for `config.axis.x.allowCalibration` for a bar graph with a numerical and timeseries x-axis.

## 2.21.0 - (February 15, 2022)

* Changed
  * Fixed to not throw an error when no x-axis label is provided.

* Added
  * Added the `showXLabel` property to allow hiding or showing the x-axis label.

## 2.20.3 - (January 4, 2022)

* Changed
  * Updated default to calculate cleaner tick values when Y and Y2 axes are present.

## 2.20.2 - (December 2, 2021)

* Changed
  * Minor dependency version bump.

## 2.20.1 - (November 30, 2021)

* Changed
  * Updated logic for displaying multiple zeros on Y and Y2 axis ticks.

## 2.20.0 - (November 16, 2021)

* Changed
  * Updated terra functional testing to 2.0

## 2.19.0 - (November 9, 2021)

* Changed
  * Fixed no error when passing empty string or undefined as label for x-axis.

## 2.18.2 - (October 12, 2021)

* Changed
  * Fixed displaying multiple zeros on Y and Y2 axis ticks.

## 2.18.1 - (September 28, 2021)

* Changed
  * Fixed label state retained during reflow.

## 2.18.0 - (August 31, 2021)

* Changed
  * Updated date format strings for locales as per internationalization Standards.

## 2.17.3 - (August 17, 2021)

* Changed
  * Fixed a bug causing a UI glitch while rendering graphs having Y2 axis.
  * Updated hyperlinks in `README.md` to reflect the updated package name from `terra-docs` to `terra-graphs-docs`.

## 2.17.2 - (June 15, 2021)

* Changed
  * Fixed bug causing the goal line element to prevent clicking on the bar graph underneath.


## 2.17.1 - (May 11, 2021)

* Changed
  * Fixed reflow bug in timeline triggered by `showLegend=false`.
  * Fixed retaining legend state in paired result graph during reflow.
  * Fixed isolation of different graph instances in same page.
  * Allowed Bubble constants to be accessible through the `Carbon.helpers` object.

## 2.17.0 - (April 27, 2021)

* Changed
  * Fixed rendering of timeline graph when it is rendered below another graph.
  * Fixed Y-axis and y2-axis icons not updating during reflow.
  * Updated `packages/carbon-graphs/README.md` so that links point to updated documentation path.

* Added
  * Added datasets for building graphs in terra-graphs package.

## 2.16.3 - (March 16, 2021)

* Changed
  * Updated panning unit tests to suppress console warnings from code items pending deprecation.
  * Updated Y-axis label container width to be static instead of dynamic.

## 2.16.2 - (February 23, 2021)

* Added
  * Added `reflowMultipleDatasets` to allow users to send in multiple datasets per graph instance.

* Changed
  * Fixed axis label bug occuring with reflow.
  * Added deprecation warning for `reflow`.
  * Fixed linter issues.

## 2.16.1 - (February 2, 2021)

* Changed
  * Fixed linter issues.
  * Fixed Y-axis range bug in reflow.

## 2.16.0 - (December 16, 2020)

* Changed
  * For consistency replaced `document` in all draw helpers with `graph.legendSVG` for better control.
  * For consistency updated reflow in Graph and Gantt constructs to update the eventlines.
  * Added code to handle null/undefined/blank in paired result graph during both initial load and reflow.
  * Updated `packages/carbon-graphs/README.md` so that it has more essential information about Carbon.
  * Added array handling for loadContent on Construct based graphs.
  * Throw an error when null/undefined/blank is passed as y value.
  * Connecting line does not go away for paired results when toggled off in Internet Explorer.

## 2.15.0 - (November 24, 2020)

* Changed
  * Added a condition to check if graphContainer is present and then resize the graph.
  * Migrated to the terra-graphs mono-rep.
