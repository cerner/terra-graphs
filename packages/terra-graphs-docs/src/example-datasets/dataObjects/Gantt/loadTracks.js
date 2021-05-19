import {
  loadTrackPopup,
  loadXAndYAxisLabelPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const loadTracks = (
  tasks = [],
  activities = [],
  events = [],
  actions = [],
  totalTracks = 1,
  isTrackSelectable = false,
) => {
  const dataObjects = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const each of Array(totalTracks).keys()) {
    const data = {
      key: `track ${each}`,
      onClick: isTrackSelectable ? loadTrackPopup : undefined,
      trackLabel: {
        display: `Project ${String.fromCharCode(65 + each)}`,
        onClick: loadXAndYAxisLabelPopup,
      },
      tasks: tasks[each] ? tasks[each] : {},
      activities: activities[each] ? activities[each] : {},
      events: events[each] ? events[each] : {},
      actions: actions[each] ? actions[each] : {},
    };
    dataObjects.push(data);
  }
  return dataObjects;
  /* gantt.unloadContent({
        key: "track 3",
        trackLabel: {
            display: "Project C"
        }
    }); */
};

export default loadTracks;
