import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

const DateDisplay = ((props) => {

  const splittedDate = props.apiResponse.split('-');
  return (
  
  <Paper className="container">
      <List>
          <ListItem>
          <ListItemText>Day: {splittedDate[1]}</ListItemText>
      </ListItem>
      <ListItem>
          <ListItemText>Month: {splittedDate[0]}</ListItemText>
      </ListItem>
      <ListItem>
          <ListItemText>Year: {splittedDate[2]}</ListItemText>
      </ListItem>
      </List>
  </Paper>
  )}
);

DateDisplay.propTypes = {
  apiResponse: PropTypes.string
}

export default DateDisplay;