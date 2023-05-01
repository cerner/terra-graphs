/* eslint-disable */
import * as d3 from "../d3Import";
import constants from '@cerner/carbon-graphs/lib/js/helpers/constants';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';

const getDate = (d) => new Date(d).toLocaleString();
const getPairData = (value) =>
    value ? (checkDate(value) ? getDate(value) : value) : null;
const checkDate = (date) => date instanceof Date;
const createItem = (pair, label, value) => {
    const item = pair.append("g").classed("popup-item", true);
    item.append("label").classed("popup-label", true).text(label);
    item.append("g").classed("popup-text", true).text(value);
};
const createTrackItem = (pair, label, items) => {
    const item = pair.append("g").classed("popup-item", true);
    item.append("label").classed("popup-label", true).text(label);
    const section = item.append("g").classed("section", true);
    for (const value of Object.values(items)) {
        const content = section.append("g").classed("content", true);
        Object.entries(value).forEach(([subLabel, subItem]) => {
            const subContent = content.append("g").classed("popup-item", true);
            subContent
                .append("label")
                .classed("popup-label", true)
                .text(
                    subLabel
                        .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
                        .replace(/(\b[a-z](?!\s))/g, (x) => x.toUpperCase())
                );
            subContent.append("g").classed("popup-text", true).text(subItem);
        });
    }
};
const renderPopup = (fn) => {
    const tip = document.querySelector("#tooltip");
    const clickHandler = () => {
        d3.select(tip).attr("style", "display:none;").selectAll("g").remove();
        if (utils.isFunction(fn)) {
            fn();
        }
        d3.select("#overlay").remove();
        tip.removeEventListener("click", clickHandler);
        window.removeEventListener("resize", clickHandler);
    };
    // Add new popup
    d3.select("body")
        .append("div", "#tooltip")
        .attr("id", "overlay")
        .classed("overlay", true)
        .on("click", clickHandler);
    // Position popup
    return d3
        .select("#tooltip")
        .style("left", `${d3.event.pageX + 5}px`)
        .style("top", `${d3.event.pageY + 5}px`);
};
const renderY2Popup = (fn) => {
    const tip = document.querySelector("#tooltip");
    const clickHandler = () => {
        d3.select(tip).attr("style", "display:none;").selectAll("g").remove();
        if (utils.isFunction(fn)) {
            fn();
        }
        d3.select("#overlay").remove();
        tip.removeEventListener("click", clickHandler);
        window.removeEventListener("resize", clickHandler);
    };
    // Add new popup
    d3.select("body")
        .append("div", "#tooltip")
        .attr("id", "overlay")
        .classed("overlay", true)
        .on("click", clickHandler);
    // Position popup
    return d3
        .select("#tooltip")
        .style("left", `${d3.event.pageX - 250}px`)
        .style("top", `${d3.event.pageY + 5}px`);
};
const removeOldPopup = () => {
    // Remove old popup
    d3.select("#overlay").remove();
    if(document.getElementsByClassName('initial-tooltip')[0]) {
        document.getElementsByClassName('initial-tooltip')[0].className = 'tooltip';
    }
    d3.select("#tooltip").attr("style", "").selectAll("g").remove();
};
export const loadPopup = (onCloseCB, key, index, value) => {
    removeOldPopup();
    const path = renderPopup(onCloseCB);
    const pair = path.append("g");
    const { x, y, label, high, mid, low } = value;
    if (x) {
        // Line
        createItem(
            pair,
            "X axis",
            `${checkDate(x) ? getDate(x) : x}`
        );
        createItem(pair, `${label.display}`, y);
    } else {
        // Paired Result
        createItem(
            pair,
            "X axis",
            `${
                high
                    ? getPairData(high.x)
                    : mid
                    ? getPairData(mid.x)
                    : low
                    ? getPairData(low.x)
                    : "N/A"
            }`
        );
        if (high) {
            createItem(pair, "High", getPairData(high.y));
        }
        if (mid) {
            createItem(pair, "Mid", getPairData(mid.y));
        }
        if (low) {
            createItem(pair, "Low", getPairData(low.y));
        }
    }
};
export const loadBubblePopup = (onCloseCB, key, index, value) => {
    removeOldPopup();
    const path = renderPopup(onCloseCB);
    const pair = path.append("g");
    const { x, y, label, weight} = value;
    if (x) {
        // Line
        createItem(
            pair,
            "X axis",
            `${checkDate(x) ? getDate(x) : x}`
        );
        createItem(pair, `year`, y);
    }
    if (weight) {
        createItem(pair, `${label.display}`, `${weight}`);
    }
};
export const loadBarPopup = (onCloseCB, key, index, values) => {
    removeOldPopup();
    const path = renderPopup(onCloseCB);
    const pair = path.append("g");
    values.forEach((value) =>
        createItem(pair, `${value.label.display}`, `${value.y}`)
    );
};
export const loadTextLabelPopup = (onCloseCB, value, index) => {
    removeOldPopup();
    const path = renderPopup(onCloseCB);
    const pair = path
        .append("g")
        .classed("popup-item", true)
        .append("g")
        .attr("style", `display: inline-block;`);
    const { shape, label, color } = value;
    if (utils.notEmpty(shape)) {
        pair.append("svg")
            .attr("width", "15")
            .attr("height", "12")
            .append("path")
            .attr(
                "transform",
                `translate(${0}, ${0}) scale(${shape.options.scale})`
            )
            .attr("d", shape.path.d)
            .attr("fill", shape.path.fill || constants.DEFAULT_COLOR)
            .attr("id", shape.path.id);
    }
    if (label.display) {
        pair.append("text")
            .classed("popup-text", true)
            .attr("style", `color: ${color};`)
            .text(`${label.display}`);
    }
    if (label.secondaryDisplay) {
        pair.append("tspan")
            .attr("style", `color: ${constants.DEFAULT_COLOR};`)
            .text(` ${label.secondaryDisplay}`);
    }
};
export const loadXAndYAxisLabelPopup = (d) => {
    removeOldPopup();
    const path = renderPopup();
    path.append("g")
        .append("g")
        .classed("popup-item", true)
        .append("g")
        .classed("popup-text", true)
        .text(d);
};
export const loadY2AxisLabelPopup = (d) => {
    removeOldPopup();
    const path = renderY2Popup();
    path.append("g")
        .append("g")
        .classed("popup-item", true)
        .append("g")
        .classed("popup-text", true)
        .text(d);
};
export const loadTrackPopup = (onCloseCB, key, value) => {
    removeOldPopup();
    const path = renderPopup(onCloseCB);
    const pair = path.append("g");
    const { tasks, activities, events, actions } = value;
    if (tasks && tasks.length > 0) {
        const tasks = [];
        tasks.forEach((task) => {
            tasks.push({
                name: task.key,
                startDate: task.startDate,
                endDate: task.endDate
            });
        });
        createTrackItem(pair, "Tasks", tasks);
    }
    if (activities && activities.length > 0) {
        const valueActivities = [];
        activities.forEach((activity) => {
            valueActivities.push({
                name: activity.key,
                startDate: activity.startDate,
                endDate: activity.endDate
            });
        });
        createTrackItem(pair, "Activities", valueActivities);
    }
    if (events && events.length > 0) {
        const valueEvents = [];
        events.forEach((event) => {
            valueEvents.push({
                name: event.key,
                values: event.values.join(", ")
            });
        });
        createTrackItem(pair, "Events", valueEvents);
    }
    if (actions && actions.length > 0) {
        const valueActions = [];
        actions.forEach((action) => {
            valueActions.push({
                name: action.key,
                values: action.values.join(", ")
            });
        });
        createTrackItem(pair, "Actions", valueActions);
    }
};
export const loadTaskPopup = (onCloseCB, key, index, value) => {
    removeOldPopup();
    const path = renderPopup(onCloseCB);
    const pair = path.append("g");
    const { label, display, y, startDate, endDate, percentage} = value;

    if (label) {
        createItem(pair, "Task Name", display);
    }
    createItem(pair, "Track", y);
    createItem(pair, "Start Date", getDate(startDate));
    createItem(pair, "End Date", getDate(endDate));
    if (percentage) {
        createItem(pair, "Percentage", percentage);
    }
};
export const loadDatelinePopup = (onCloseCB, payload) => {
    removeOldPopup();
    const path = renderPopup(onCloseCB);
    const pair = path.append("g");
    const { label, value } = payload;

    if (label) {
        createItem(pair, "Milestone", label.display);
    }
    createItem(pair, "Date", getDate(value));
};
export const loadTimelinePopup = (onCloseCB, key, index, value) => {
    removeOldPopup();
    const path = renderPopup(onCloseCB);
    const pair = path.append("g");
    const { x, y, label, content} = value;
    createItem(
        pair,
        "X axis",
        `${checkDate(x) ? getDate(x) : x}`
    );
    createItem(pair, `${label.display}`, content);
};
export const loadPiePopup = (onCloseCB, key, index, val) => {
    removeOldPopup();
    const path = renderPopup(onCloseCB);
    const pair = path.append("g");
    const { label, value } = val;
    createItem(pair, label.display, value);
};
