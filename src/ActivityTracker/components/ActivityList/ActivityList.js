import React,{useState} from 'react';

import ActivityItem from '../ActivityItem/ActivityItem';
import Button from '../../../shared/components/UIElements/Button/Button';
import './ActivityList.css';

const ActivityList = props => {
    const activitiesHeaders = {
        name: "Activity name",
        friendly: "COVID friendly",
        times: "Times performed"
    }

    const[showButton, setShowButton] = useState(false);
    const [activities, setActivities] = useState([]);

    const selectActivity = event => {
        const updatedActivities = [...activities]
        if (updatedActivities.includes(event.target.value)) {
          const index = updatedActivities.indexOf(event.target.value);
          updatedActivities.splice(index, 1);
        } else {
          updatedActivities.push(event.target.value);
        }
        setShowButton(updatedActivities.length > 0);
        setActivities(updatedActivities);
    }

    const submitActivitiesHandler = (event) => {
      event.preventDefault();
      props.onUpdate(activities);
      //reset activities
      const markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
      for (var checkbox of markedCheckbox) {
        checkbox.checked = false;
      }

      setActivities([]);
      setShowButton(false);
    };

    return (
      <section>
        <form onSubmit={submitActivitiesHandler}>
          <div className="activityList__table">
            <ActivityItem header activity={activitiesHeaders} />
            {props.activities.map((activity) => {
              return (
                <ActivityItem
                  key={activity.id}
                  onChange={selectActivity}
                  activity={activity}
                />
              );
            })}
          </div>
          {showButton && (
            <div className="center">
              <Button inverse type="submit">
                Perfom Activities
              </Button>
            </div>
          )}
        </form>
      </section>
    );
};

export default ActivityList;