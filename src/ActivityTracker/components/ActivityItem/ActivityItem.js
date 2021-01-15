import React from 'react';

import './ActivityItem.css';
const ActivityItem = props => {
      let rowClasses = "activityItem__row";
      if(props.header){
        rowClasses = ["activityItem__row", "activityItem__row--header"].join(' ');
      }
    return (
      <div className={rowClasses}>
        <span className="activityItem__cell">
          {props.activity.id && (
            <input
              type="checkbox"
              name={props.activity.name}
              value={props.activity.id}
              onChange={props.onChange}
            />
          )}
        </span>
        <span className="activityItem__cell">{props.activity.name}</span>
        <span className="activityItem__cell">
          {props.header
            ? props.activity.friendly
            : props.activity.friendly
            ? "Yes"
            : "No"}
        </span>
        <span className="activityItem__cell">{props.activity.times}</span>
      </div>
    );
}

export default ActivityItem;