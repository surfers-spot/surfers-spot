import React from 'react';
import { Grid, Loader, Header, Segment } from 'semantic-ui-react';
import swal from 'sweetalert';
import { AutoForm, ErrorsField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { LongTextField } from 'uniforms-semantic/es6';
import { Breaks } from '../../api/break/Break';

const bridge = new SimpleSchema2Bridge(Breaks.schema);

/** Renders the Page for editing a single document. */
class EditBreak extends React.Component {

  // On successful submit, insert the data.
  submit(data) {
    const { name, location, image, type, difficulty, description, _id } = data;
    Breaks.collection.update(_id, { $set: { name, location, image, type, difficulty, description } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  }

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  renderPage() {
    return (
      <Grid container centered id="edit-break">
        <Grid.Column>
          <Header as="h2" textAlign="center">Edit a Break</Header>
          <AutoForm schema={bridge} onSubmit={data => this.submit(data)} model={this.props.doc}>
            <Segment>
              <TextField name='name' id="edit-form-name"/>
              <TextField name='location' id="edit-form-location"/>
              <TextField name='image' id="edit-form-image"/>
              <SelectField name='type' id="edit-form-type"/>
              <SelectField name='difficulty' id="edit-form-difficulty"/>
              <LongTextField name='description' id="edit-form-description"/>
              <SubmitField value='Submit' id="edit-form-submit"/>
              <ErrorsField/>
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

// Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use.
EditBreak.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Breaks.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the document
  const doc = Breaks.collection.findOne(documentId);
  return {
    doc,
    ready,
  };
})(EditBreak);
