import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Grid, Header, Search, Container, Card, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { _ } from 'meteor/underscore';
import BreakCards from '../components/BreakCards';
import { Breaks } from '../../api/break/Break';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Loading</Loader>;
  }

  renderPage() {
    const cards = _.sample(Breaks.collection.find({}).fetch(), 3);
    return (
      <div>
        <div className="surfers-spot-background">
          <Container textAlign="center" style={{ padding: 50 }}>
            <Header inverted as='h1'>Catch your Next Wave</Header>
            <Search size="massive" placeholder="Search for Surf Spots" />
          </Container>
          <Grid id='landing-page' centered stackable columns={3} container>
            <Grid.Column textAlign='center' className="blurBackground">
              <Header inverted as='h1'>Breaks</Header>
              <Header inverted as='h3'>Learn about the different surf breaks here on Oahu</Header>
            </Grid.Column>

            <Grid.Column textAlign='center' className="blurBackground">
              <Header inverted as='h1'>Reviews</Header>
              <Header inverted as='h3'>Leave a review on the different surf breaks or read some before you head out for your next session. </Header>
            </Grid.Column>

            <Grid.Column textAlign='center' className="blurBackground">
              <Header inverted as='h1'>Lessons</Header>
              <Header inverted as='h3'>Find information on how to surf and places offering lessons.</Header>
            </Grid.Column>
          </Grid>
        </div>

        <div className="breakCards">
          <Container id='Break Cards'>
            <Header as='h1'> Random Breaks:</Header>
            <Card.Group centered>
              {cards.map((breaks, index) => <BreakCards key={index} break={breaks}/>)}
            </Card.Group>
          </Container>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  // Ensure that minimongo is populated with all collections prior to running render().
  const sub1 = Meteor.subscribe(Breaks.userPublicationName);
  return {
    ready: sub1.ready(),
  };
})(Landing);
