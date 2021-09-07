import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import { loadTimelinePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const bobRossIpsum = "Just use the old one inch brush. It's so important to do something every day that will make you happy. "
  + "I sincerely wish for you every possible joy life could bring. Water's like me. It's laaazy ... Boy, it "
  + "always looks for the easiest way to do things\n\nWe're trying to teach you a technique here and how to use it. "
  + 'The least little bit can do so much. There we go.\n\nNo worries. No cares. Just float and wait for the wind to blow you around. '
  + "These trees are so much fun. I get started on them and I have a hard time stopping. We'll make some happy little bushes here. "
  + 'Absolutely no pressure. You are just a whisper floating across a mountain. There are no limits in this world. '
  + 'A thin paint will stick to a thick paint.\n';

const data = {
  key: 'uid_1',
  label: {
    display: 'Timeline A',
  },
  color: Carbon.helpers.COLORS.BLUE,
  onClick: loadTimelinePopup,
  values: [
    {
      x: new Date(2016, 0, 1, 1, 30).toISOString(),
      content: bobRossIpsum,
      isCritical: true,
    },
    {
      x: new Date(2016, 0, 1, 2, 15).toISOString(),
      content: bobRossIpsum,
      isCritical: true,
    },
    {
      x: new Date(2016, 0, 1, 3, 15).toISOString(),
      content: bobRossIpsum,
    },
    {
      x: new Date(2016, 0, 1, 4, 15).toISOString(),
      content: bobRossIpsum,
      isCritical: true,
    },
    {
      x: new Date(2016, 0, 1, 8, 15).toISOString(),
      content: bobRossIpsum,
    },
  ],
};

export default data;
