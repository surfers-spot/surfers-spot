import React from 'react';
import { Button, Container, Divider, Grid, Header, Image, Segment } from 'semantic-ui-react';

export default class AboutUs extends React.Component {

  render() {
    return (
      <div>
        <br/>
        <Header id="about-us-page" as='h3' style={{ fontSize: '2em', textAlign: 'center' }}>ABOUT US</Header>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  We Help Surfer&apos;s Catch Their Next Wave
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  If you&apos;re looking to
                  catch your wave, you&apos;ve come to the right place. Whether you&apos;re just learning to surf for the first time or a seasoned veteran on the waves,
                  we have gathered the best breaks near you. Our breaks include information on type, difficulty, and insider-details to help you find the perfect break for you interests.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  We&apos;ve Curated the Best Breaks in Your Area
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Surfer&apos;s Spot is a website built with surfer&apos;s in mind. At Surfer&apos;s Spot,
                  you can browse a list of our favorite breaks. If you&apos;re looking to try something new,
                  try the &quot;Random&quot; break bottom on the navigation bar. Or, you can click
                  the &quot;Popular&quot; break button to see what breaks are most popular this season.
                  So what are you waiting for? Use Surfer&apos;s Spot to help you get surfing today!
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image bordered rounded size='large' src='/images/surfer1.jpg' />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='huge'>Find a Break Now</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  &quot;We love the Surfer&apos;s Spot&quot;
                </Header>
                <p style={{ fontSize: '1.33em' }}>Surfer&apos;s Spot has quickly become the favorite website of many surfers</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  &quot;I can&apos;t recommend this website enough.&quot;
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  {/* <Image avatar src='/images/avatar/large/nan.jpg' /> */}
                  -Local Surfer
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Read the Latest Reviews
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Our breaks include reviews by local surfers to help you find only the best breaks in your area.
              Also, you can leave your own reviews based on your experiences at different breaks and help other surfer&apos;s stay informed. Click the button below to browse or leave a review.
            </p>
            <Button as='a' size='large'>
              Browse Now
            </Button>

            <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <p>Join Our Email List Below</p>
            </Divider>

            <Header as='h3' style={{ fontSize: '2em' }}>
              Don&apos;t Know How to Surf?
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Don&apos;t know how to surf? Don&apos;t worry! Surfing could become quickly become your new
              favorite hobby and we have gathered the best organizations and teachers to help you hang ten with
              the pros in no time. Click the button below to get started.
            </p>
            <Button as='a' size='large'>
              Find Lessons Near You
            </Button>
          </Container>
        </Segment>
      </div>
    );
  }
}
