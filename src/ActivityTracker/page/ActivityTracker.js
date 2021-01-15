import React, { useState, useEffect } from "react";

import ActivityList from "../components/ActivityList/ActivityList";
import Card from '../../shared/components/UIElements/Card/Card';
import Modal from "../../shared/components/UIElements/Modal/Modal";
import Button from "../../shared/components/UIElements/Button/Button";
import Spinner from "../../shared/components/UIElements/Spinner/Spinner";
import PageTitle from "../../shared/components/UIElements/PageTitle/PageTitle";
import "./ActivityTracker.css";

const DUMMY_DATA = [
  {
    id: "1",
    name: "Netflix & Chill",
    friendly: true,
    times: 50,
  },
  {
    id: "2",
    name: "Bday in a restaurant",
    friendly: false,
    times: 0,
  },
  {
    id: "3",
    name: "Vacation in Hawaii",
    friendly: false,
    times: 0,
  },
  {
    id: "4",
    name: "Becoming Maria Kondo",
    friendly: true,
    times: 2,
  },
  {
    id: "5",
    name: "Disco time!",
    friendly: false,
    times: 0,
  },
  {
    id: "6",
    name: "Baking Bread",
    friendly: true,
    times: 1,
  },
  {
    id: "7",
    name: "Buying in Amazon",
    friendly: true,
    times: 3,
  },
];

const ActivityTracker = (props) => {
  const [activities, setActivities] = useState(props.initialState ? props.initialState : []);

  const[forbidenActivities, setForbidenActivities] = useState([]);

  useEffect(() => {
    //Simulate API request
    setTimeout( () =>{
      setActivities(DUMMY_DATA);
    },1000);
    
  }, [setActivities]);
 
  const closeModal = () => {
    //resetForbiden activities
    setForbidenActivities([]);
  }

  const updateActivities = (performingActivities) => {
      const updatedActivities = [...activities];
      const updateForbiden = [...forbidenActivities];
       performingActivities.forEach((element) => {
        const info = updatedActivities.find((a) => a.id === element);
        if(!info){
            //error
            return;
        }
        const index = updatedActivities.findIndex(a => a.id === element);
        if(!info.friendly) {
            updateForbiden.push(info.name);
            return;
        }
        updatedActivities[index].times++;

       });
       setActivities(updatedActivities);
       setForbidenActivities(updateForbiden);
  }

  
  return (
    <React.Fragment>
      <Modal
        show={forbidenActivities.length > 0}
        onCancel={closeModal}
        header="Be aware!"
        footer={<Button onClick={closeModal}>close</Button>}
      >
        <p>
          During the COVID you <b>should not</b> perform the following
          activities:
        </p>
        <ul>
          {forbidenActivities.map((activity) => {
            return <li key={activity.id}>{activity}</li>;
          })}
        </ul>
      </Modal>
      <PageTitle>My 2020 Activities</PageTitle>
      <Card>
        {activities.length > 0 ?
        <ActivityList onUpdate={updateActivities} activities={activities} />:
        <Spinner />
      }
      </Card>
    </React.Fragment>
  );
};

export default ActivityTracker;
