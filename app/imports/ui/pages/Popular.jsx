import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Loader, Header, Segment, Grid, Image, Button, Divider } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { _ } from 'meteor/underscore';
import { Breaks } from '../../api/break/Break';

class PopularPage extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const popular = _.map(Breaks.collection.find().fetch(), function (item) { return { name: item.name, views: item.viewed }; });
    const page = (_.max(popular, function (item) { return item.views; })).name;
    const location = _.pluck(Breaks.collection.find({ name: page }).fetch(), 'location');
    const image = _.pluck(Breaks.collection.find({ name: page }).fetch(), 'image');
    const type = _.pluck(Breaks.collection.find({ name: page }).fetch(), 'type');
    const difficulty = _.pluck(Breaks.collection.find({ name: page }).fetch(), 'difficulty');
    const description = _.pluck(Breaks.collection.find({ name: page }).fetch(), 'description');
    return (
      <div>
        <div className='titleBackground'>
          <Header id="popular-page" inverted as='h3' style={{ fontSize: '4em', textAlign: 'center' }}>{page}</Header>
        </div>

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
                    Catch Your Next Wave at {page}
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
          <a href={`http://maps.google.com/?q=${location}`}>Get Directions</a>
        </Divider>
      </div>
    );
  }
}

PopularPage.propTypes = {
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Ensure that minimongo is populated with all collections prior to running render().
  const sub1 = Meteor.subscribe(Breaks.userPublicationName);
  return {
    ready: sub1.ready(),
  };
})(PopularPage);
