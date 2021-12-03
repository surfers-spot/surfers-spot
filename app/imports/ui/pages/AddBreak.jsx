import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { LongTextField } from 'uniforms-semantic/es6';
import { Breaks } from '../../api/break/Break';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  name: String,
  location: String,
  image: String,
  direction: String,
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
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class AddBreak extends React.Component {

  // On submit, insert the data.
  submit(data, formRef) {
    const { name, location, image, type, difficulty, description } = data;
    Breaks.collection.insert({ name, location, image, type, difficulty, description },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      });
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  render() {
    let fRef = null;
    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center" id="addbreak-page">Add a Break</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
            <Segment>
              <TextField name='name' id="break-form-name"/>
              <TextField name='location' id="break-form-location"/>
              <TextField name='image' id="break-form-image"/>
              <SelectField name='type' id="break-form-type"/>
              <SelectField name='difficulty' id="break-form-difficulty"/>
              <LongTextField name='description' id="break-form-description"/>
              <SubmitField value='Submit' id="break-form-submit"/>
              <ErrorsField/>
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

export default AddBreak;
