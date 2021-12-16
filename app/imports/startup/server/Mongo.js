import { Meteor } from 'meteor/meteor';
import { Breaks } from '../../api/break/Break';
import { Emails } from '../../api/emails/Emails';

/* eslint-disable no-console */

// Initialize the database with a default breaks.
function addBreak(data) {
  console.log(`Adding: ${data.name}`);
  Breaks.collection.insert(data);
}

function addEmail(data) {
  console.log(`Adding: ${data.email}`);
  Emails.collection.insert(data);
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

if (Emails.collection.find().count() === 0) {
  if (Meteor.settings.defaultEmails) {
    console.log('Creating default emails.');
    Meteor.settings.defaultEmails.map(data => addEmail(data));
  } else {
    console.log('Error initializing default emails.');
  }
}
