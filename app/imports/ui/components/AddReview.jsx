import React from 'react';
import { Segment } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SubmitField, LongTextField, HiddenField } from 'uniforms-semantic';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import PropTypes from 'prop-types';
import { Reviews } from '../../api/review/Review';

// Create a schema to specify the structure of the data to appear in the form.

const bridge = new SimpleSchema2Bridge(Reviews.schema);

/** Renders the Page for adding a document. */
class AddReview extends React.Component {

  // On submit, insert the data.
  submit(data, formRef) {
    const { breakName, text } = data;
    Reviews.collection.insert({ breakName, text },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Review added successfully', 'success');
          formRef.reset();

          /** Have to disable the following so it can reload the page after each addition to the review collection * */
          // eslint-disable-next-line no-undef
          window.location.reload(false);
        }
      });
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  render() {
    let fRef = null;
    return (
      <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
        <Segment style={{ marginTop: '16.8px', marginBottom: '16.8px' }}>
          <HiddenField name='breakName' value={this.props.name}/>
          <LongTextField label="Leave a Review" name='text'/>
          <SubmitField value='Submit'/>
          <ErrorsField/>
        </Segment>
      </AutoForm>
    );
  }
}

AddReview.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AddReview;
