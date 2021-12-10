import React from 'react';
import { Grid, List, Input } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default class FooterMenu extends React.Component {
  render() {
    return (
      <div className="footer-background">
        <Grid container centered stackable columns={3}>
          <Grid.Column>
            <List>
              <p style={{ color: 'grey', fontSize: 22, fontFamily: 'Volkhov' }}>Navigate</p><hr/>
              <List.Item id="footer-AboutUs-page" as={NavLink} style={{ color: 'white' }} exact to="/about" key='about'>About Us</List.Item>
              <List.Item id="footer-random-page" as={NavLink} style={{ color: 'white' }} exact to="/random" key='random'>Go to a Random Break</List.Item>
              <List.Item id="footer-popular-page" as={NavLink} style={{ color: 'white' }} exact to="/view/Bowls" key='bowls'>Visit a Popular Break</List.Item>
              <List.Item id="footer-directory" as={NavLink} style={{ color: 'white' }} exact to="/directory" key='directory'>Break Directory</List.Item>
              <List.Item id="footer-lessons" as={NavLink} style={{ color: 'white' }} exact to="/lessons" key='lessons'>Lessons</List.Item>
              <List.Item>Leave a Review</List.Item>
            </List>
          </Grid.Column>

          <Grid.Column>
            <div className="ui aligned container">
              <p style={{ color: 'grey', fontSize: 22, fontFamily: 'Volkhov' }}>Organization</p><hr/>
              Department of Information <br/> and Computer Sciences <br/>
            University of Hawaii<br/>
            Honolulu, HI 96822 <br/>
              <a href="https://surfers-spot.github.io/">Github.io Page</a>
            </div>
          </Grid.Column>

          <Grid.Column padding-left="300px">
            <List>
              <p style={{ color: 'grey', fontSize: 22, fontFamily: 'Volkhov' }}>Stay Connected</p><hr/>
              <List.Item>Want to be informed when new breaks are added?</List.Item>
              <List.Item>Enter your email below to stay informed</List.Item>
              <List.Item>
                <Input
                  action={{
                    color: 'teal',
                    labelPosition: 'left',
                    icon: 'envelope',
                    content: 'JOIN',
                  }}
                  actionPosition='left'
                  placeholder='Enter email address'
                />
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
