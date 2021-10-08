import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/timeseriesConfigAlternateLocale';

// const tickValues = [
//   new Date(2016, 0, 1, 1, 0).toISOString(),
//   new Date(2016, 0, 1, 5, 0).toISOString(),
//   new Date(2016, 0, 1, 10, 0).toISOString(),
//   new Date(2016, 0, 1, 15, 0).toISOString(),
//   new Date(2016, 0, 1, 20, 0).toISOString(),
// ];

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getGraphConfig('#xAxisAlternateLocale'));
graphConfig.locale = Carbon.helpers.LOCALE.de_DE;
// graphConfig.axis.x.ticks = {
//   values: tickValues,
//   format: '%A %e %B %Y, %X',
// };

const XAxisAlternateLocaleGeneralExample = () => {
  React.useEffect(() => {
    Carbon.api.graph(graphConfig);
  }, []);
  return (
    <ExampleGraphContainer id="xAxisAlternateLocale" />
  );
};

export default XAxisAlternateLocaleGeneralExample;
