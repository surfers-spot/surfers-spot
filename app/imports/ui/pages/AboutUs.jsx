import React from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react';

export default class AboutUs extends React.Component {

  render() {
    return (
      <div>
        <br/>
        <Header as='h3' style={{ fontSize: '2em', textAlign: 'center' }}>ABOUT US</Header>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  We Help Surfer&apos;s Catch Their Next Wave
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet pulvinar
                  ligula viverra rhoncus. Integer pulvinar vulputate justo in feugiat. Duis nisi purus,
                  imperdiet scelerisque eros et, luctus pulvinar neque. In maximus, libero vitae hendrerit
                  porttitor, lacus mauris auctor mauris, id molestie lacus dui ac urna.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  We&apos; Curated the Best Breaks in Your Area
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet pulvinar ligula
                  viverra rhoncus. Integer pulvinar vulputate justo in feugiat. Duis nisi purus, imperdiet
                  scelerisque eros et, luctus pulvinar neque. In maximus, libero vitae hendrerit porttitor,
                  lacus mauris auctor mauris, id molestie lacus dui ac urna.
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
                <p style={{ fontSize: '1.33em' }}>Surfer&apos;s Spot helps me choose the best breaks for my interests</p>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet pulvinar
              ligula viverra rhoncus. Integer pulvinar vulputate justo in feugiat. Duis nisi
              purus, imperdiet scelerisque eros et, luctus pulvinar neque. In maximus, libero
              vitae hendrerit porttitor, lacus mauris auctor mauris, id molestie lacus dui ac urna.
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
              <a href='#'>Join Our Email List</a>
            </Divider>

            <Header as='h3' style={{ fontSize: '2em' }}>
              Don&apos;t Know How to Surf?
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet pulvinar
              ligula viverra rhoncus. Integer pulvinar vulputate justo in feugiat. Duis nisi
              purus, imperdiet scelerisque eros et, luctus pulvinar neque. In maximus, libero
              vitae hendrerit porttitor, lacus mauris auctor mauris, id molestie lacus dui ac urna.
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
