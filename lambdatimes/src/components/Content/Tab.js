import React from 'react';
import PropTypes from 'prop-types';
import sc from 'styled-components';

const TabClass = sc.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;

TabClass:hover {
  text-decoration: underline;
}`;

const ActiveTab = sc.div`
  background-color: #fff;
  color: #333;
  border: 2px solid #333;
`;

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

  const TabDoodle = props.tab === props.selectedTab ? ActiveTab:TabClass;

  return (
    <TabDoodle
      onClick={() => props.selectTabHandler(props.tab)}
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
    >
      {props.tab.toUpperCase()}
    </TabDoodle>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  selected: PropTypes.string.isRequired,
  changeSelected: PropTypes.func.isRequired
};

export default Tab;
