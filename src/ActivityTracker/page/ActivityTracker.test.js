import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; //At this time we do not have oficial support for react 17

import ActivityTracker from './ActivityTracker';
import ActivityList from '../components/ActivityList/ActivityList';
import Spinner from '../../shared/components/UIElements/Spinner/Spinner';

configure({ adapter: new Adapter() });

describe("<ActivityTracker />", () =>{ 
    let wrapper;
    beforeEach(
        () => {
            wrapper = shallow(<ActivityTracker />)
        }
    );

    it("Should show  the spinner if no activities are listed", () => {
        expect(wrapper.find(Spinner)).toHaveLength(1);
    });


});