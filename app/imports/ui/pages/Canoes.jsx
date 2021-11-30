import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Loader, Header, Segment, Grid, Image, Button, Divider } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { _ } from 'meteor/underscore';
import { Breaks } from '../../api/break/Break';

class CanoesPage extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const name = _.pluck(Breaks.collection.find({ name: 'Canoes' }).fetch(), 'name');
    const location = _.pluck(Breaks.collection.find({ name: 'Canoes' }).fetch(), 'location');
    const image = _.pluck(Breaks.collection.find({ name: 'Canoes' }).fetch(), 'image');
    const type = _.pluck(Breaks.collection.find({ name: 'Canoes' }).fetch(), 'type');
    const difficulty = _.pluck(Breaks.collection.find({ name: 'Canoes' }).fetch(), 'difficulty');
    const description = _.pluck(Breaks.collection.find({ name: 'Canoes' }).fetch(), 'description');
    return (
      <div>
        <br/>
        <Segment style={{ padding: '2em' }} vertical>
          <Header as='h3' style={{ fontSize: '4em', textAlign: 'center' }}>{name}</Header>
        </Segment>

        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '2em', paddingTop: '3em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Difficulty: {difficulty}
                </Header>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '2em', paddingTop: '3em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Type: {type}
                </Header>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '2em', paddingTop: '2em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Location: {location}
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <div className="break-background">
          <Segment style={{ padding: '8em 0em' }} vertical >
            <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column className="breakGrid" width={7} >
                  <Header as='h3' style={{ fontSize: '2em' }}>
                    Catch Your Next Wave at {name}
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>
                    {description}
                  </p>
                </Grid.Column>
                <Grid.Column floated='right' width={9}>
                  <Image bordered rounded size='massive' src={image} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column style={{ paddingTop: '2em' }} textAlign='center'>
                  <Button size='huge' floated='left'>Leave a Review</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </div>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase', color: 'black' }}
        >
          <a href='https://www.google.com/maps/dir//Kuhio+Beach+Park/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x7c007276d14d20e3:0x9649181e4780c851?sa=X&ved=2ahUKEwivmYLA0r_0AhVqFTQIHWp2C-UQ9Rd6BAgFEAQ'>Get Directions</a>
        </Divider>
      </div>
    );
  }
}

CanoesPage.propTypes = {
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Ensure that minimongo is populated with all collections prior to running render().
  const sub1 = Meteor.subscribe(Breaks.userPublicationName);
  return {
    ready: sub1.ready(),
  };
})(CanoesPage);
