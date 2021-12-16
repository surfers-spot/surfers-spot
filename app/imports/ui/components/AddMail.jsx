import React from 'react';
import { Segment } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SubmitField, TextField, HiddenField } from 'uniforms-semantic';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import PropTypes from 'prop-types';
import { Mails } from '../../api/mail/Mail';

// Create a schema to specify the structure of the data to appear in the form.

const bridge = new SimpleSchema2Bridge(Mails.schema);

/** Renders the Page for adding a document. */
class AddMail extends React.Component {

  // On submit, insert the data.
  submit(data, formRef) {
    const { breakName, text } = data;
    Mails.collection.insert({ breakName, text },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Note added successfully', 'success');
          formRef.reset();
        }
      });
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  render() {
    let fRef = null;
    return (
      <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
        <Segment>
          <HiddenField name='breakName' value={this.props.name}/>
          <TextField label="Enter your email below: " name='text'/>
          <SubmitField value='Submit'/>
          <ErrorsField/>
        </Segment>
      </AutoForm>
    );
  }
}

AddMail.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AddMail;
