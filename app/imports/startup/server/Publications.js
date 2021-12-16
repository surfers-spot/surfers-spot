import { Meteor } from 'meteor/meteor';
import { Breaks } from '../../api/break/Break';
import { Reviews } from '../../api/review/Review';

// General level publication. Will publish everything in the collection.
Meteor.publish(Breaks.userPublicationName, function () {
  if (true) {
    return Breaks.collection.find();
  }
  return this.ready();
});

Meteor.publish(Reviews.userPublicationName, function () {
  if (true) {
    return Reviews.collection.find();
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
