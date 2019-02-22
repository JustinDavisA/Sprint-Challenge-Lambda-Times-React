import React from 'react';
import PropTypes from 'prop-types';
import sc from 'styled-components';

import Tab from './Tab';

const TabsClass = sc.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;

@media (min-width: 1280px) {
  TabsClass {
    width: 1280px;
  }
}`;

const Topics = sc.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const Title = sc.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Tabs = props => {
  return (
    <TabsClass>
      <Topics>
        <Title>TRENDING TOPICS:</Title>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {props.tabs.map(thisTab => {
          return (
            <Tab
              selectTabHandler={props.selectTabHandler}
              selectedTab={props.selectedTab}
              tab={thisTab}
            />
          )
        })}
      </Topics>
    </TabsClass>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.ProtoTypes = {
  tabs: PropTypes.arrayOf(PropTypes),
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
}
export default Tabs;
