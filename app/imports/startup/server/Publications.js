import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Breaks } from '../../api/break/Break';

// User-level publication. Will publish everything in the collection.
Meteor.publish(Breaks.userPublicationName, function () {
  if (true) {
    return Breaks.collection.find();
  }
  return this.ready();
});

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise publish nothing.
// Probably unneeded because everyone can see all the breaks.
Meteor.publish(Breaks.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Breaks.collection.find();
  }
  return this.ready();
});

// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
