import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Container, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import BreakCards from '../components/BreakCards';
import { Breaks } from '../../api/break/Break';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Directory extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
      <div className='directoryBackground'>
        <Container fluid id = "directory-page" style={{ align: 'center', padding: '5em 5em 5em' }}>
          <Header as="h2" textAlign="center" inverted>Surf Breaks Directory</Header>
          <Card.Group>
            {this.props.breaks.map((spot, index) => <BreakCards key={index} break={spot}/>)}
          </Card.Group>
        </Container>
      </div>
    );
  }
}

// Require an array of Stuff documents in the props.
Directory.propTypes = {
  breaks: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Breaks.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Stuff documents
  const breaks = Breaks.collection.find({}).fetch();
  return {
    breaks,
    ready,
  };
})(Directory);
