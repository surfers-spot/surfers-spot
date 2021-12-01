import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The BreaksCollection. It encapsulates state and variable values for break.
 */
class BreaksCollection {
  constructor() {
    // The name of this collection.
    this.name = 'BreaksCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      name: { type: String, index: true, unique: true },
      location: String,
      image: String,
      type: {
        type: String,
        allowedValues: ['Reef', 'Beach', 'Point', 'none'],
        defaultValue: 'none',
      },
      difficulty: {
        type: String,
        allowedValues: ['Easy', 'Medium', 'Hard', 'none'],
        defaultValue: 'none',
      },
      description: String,
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the BreaksCollection.
 * @type {BreaksCollection}
 */
export const Breaks = new BreaksCollection();
