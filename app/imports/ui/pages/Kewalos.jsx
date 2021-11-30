import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Loader, Header, Segment, Grid, Image, Button, Divider } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { _ } from 'meteor/underscore';
import { Breaks } from '../../api/break/Break';

class KewalosPage extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const name = _.pluck(Breaks.collection.find({ name: 'Kewalos' }).fetch(), 'name');
    const location = _.pluck(Breaks.collection.find({ name: 'Kewalos' }).fetch(), 'location');
    const image = _.pluck(Breaks.collection.find({ name: 'Kewalos' }).fetch(), 'image');
    const type = _.pluck(Breaks.collection.find({ name: 'Kewalos' }).fetch(), 'type');
    const difficulty = _.pluck(Breaks.collection.find({ name: 'Kewalos' }).fetch(), 'difficulty');
    const description = _.pluck(Breaks.collection.find({ name: 'Kewalos' }).fetch(), 'description');
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
          <a href='https://www.google.com/maps/place/Duke+Kahanamoku+Lagoon+Boardwalk,+Honolulu,+HI+96815/@21.281753,
                -157.8415902,17z/data=!3m1!4b1!4m5!3m4!1s0x7c006df60f4b4891:0xe083ee318e49370c!8m2!3d21.281753!4d-157.8394015'>Get Directions</a>
        </Divider>
      </div>
    );
  }
}

KewalosPage.propTypes = {
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Ensure that minimongo is populated with all collections prior to running render().
  const sub1 = Meteor.subscribe(Breaks.userPublicationName);
  return {
    ready: sub1.ready(),
  };
})(KewalosPage);
