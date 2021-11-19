import React from 'react';
import { Grid, Header, Search, Container } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <div className="surfers-spot-background">
        <Container textAlign="center" style={{ padding: 50 }}>
          <Header inverted as='h1'>Catch your Next Wave</Header>
          <Search size="massive" placeholder="Search for Surf Spots" />
        </Container>
        <Grid id='landing page' centered stackable columns={3} container>
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
    );
  }
}

export default Landing;
