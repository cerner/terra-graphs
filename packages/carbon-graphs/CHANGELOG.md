# ChangeLog

## Unreleased

* Changed
  * Fixed a bug causing the UI glitch while rendering graphs having Y2 axis.

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
