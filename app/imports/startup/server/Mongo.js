import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Breaks } from '../../api/break/Break';

/* eslint-disable no-console */

// Initialize the database with a default data document.
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
}

// Initialize the database with a default breaks.
function addBreak(data) {
  console.log(`Adding: ${data.name}`);
  Breaks.collection.insert(data);
}

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

// Initialize the BreaksCollection if empty.
if (Breaks.collection.find().count() === 0) {
  if (Meteor.settings.defaultBreaks) {
    console.log('Creating default breaks.');
    Meteor.settings.defaultBreaks.map(data => addBreak(data));
  } else {
    console.log('Error initializing default breaks.');
  }
}
