import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Loader, Header, Segment, Grid, Image, Divider, Container } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { _ } from 'meteor/underscore';
import { Link } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Breaks } from '../../api/break/Break';
import { Reviews } from '../../api/review/Review';
import AddReview from '../components/AddReview';
import Review from '../components/Review';

class ViewBreak extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const name = _.pluck(Breaks.collection.find({ name: this.props.breakName }).fetch(), 'name');
    const location = _.pluck(Breaks.collection.find({ name: this.props.breakName }).fetch(), 'location');
    const image = _.pluck(Breaks.collection.find({ name: this.props.breakName }).fetch(), 'image');
    const type = _.pluck(Breaks.collection.find({ name: this.props.breakName }).fetch(), 'type');
    const difficulty = _.pluck(Breaks.collection.find({ name: this.props.breakName }).fetch(), 'difficulty');
    const description = _.pluck(Breaks.collection.find({ name: this.props.breakName }).fetch(), 'description');
    const id = _.pluck(Breaks.collection.find({ name: this.props.breakName }).fetch(), '_id');
    const pageId = `${this.props.breakName}-page`;
    Breaks.collection.update(id[0], { $inc: { viewed: 1 } });
    const reviews = _.pluck(Reviews.collection.find({ breakName: this.props.breakName }).fetch(), 'text');

    return (
      <div>
        <div className='titleBackground'>
          <Header id={pageId} inverted as='h3' style={{ fontSize: '4em', textAlign: 'center' }}>{name}</Header>
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
              <Grid.Column style={{ paddingBottom: '2em', paddingTop: '3em' }}>
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
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase', color: 'black' }}
          >
            <Link to={`/edit/${id}`}>Edit</Link>
          </Divider>
        ) : ''}
        <Container>
          <Header as='h3' style={{ fontSize: '2em', textAlign: 'left', paddingBottom: '1em' }}>Reviews:</Header>
          {reviews.map((text, index) => <Review key={index} text={text}/>)}
        </Container>
        <Container>
          <AddReview name={this.props.breakName}/>
        </Container>
      </div>
    );
  }
}

ViewBreak.propTypes = {
  ready: PropTypes.bool.isRequired,
  breakName: PropTypes.object,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  const breakName = match.params.name;
  // Ensure that minimongo is populated with all collections prior to running render().
  const sub1 = Meteor.subscribe(Breaks.userPublicationName);
  const sub2 = Meteor.subscribe(Reviews.userPublicationName);
  return {
    ready: sub1.ready() && sub2.ready(),
    breakName,
  };
})(ViewBreak);
