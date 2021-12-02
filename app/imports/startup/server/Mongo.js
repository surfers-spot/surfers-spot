import { Meteor } from 'meteor/meteor';
import { Breaks } from '../../api/break/Break';

/* eslint-disable no-console */

// Initialize the database with a default breaks.
function addBreak(data) {
  console.log(`Adding: ${data.name}`);
  Breaks.collection.insert(data);
}

// Initialize the BreaksCollection if empty.
if (Breaks.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default breaks.');
    Meteor.settings.defaultData.map(data => addBreak(data));
  } else {
    console.log('Error initializing default breaks.');
  }
}
