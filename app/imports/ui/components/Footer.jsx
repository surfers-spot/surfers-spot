import React from 'react';
import { Grid, List, Input } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { AutoForm } from 'uniforms-semantic';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Emails } from '../../api/emails/Emails';

const formSchema = new SimpleSchema({
  email: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

export default class FooterMenu extends React.Component {

  submit(data, formRef) {
    const { email } = data;
    Emails.collection.insert({ email },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'You have been added to the email list', 'success');
          formRef.reset();
        }
      });
  }

  render() {
    let fRef = null;
    return (
      <div className="footer-background">
        <Grid container centered stackable columns={3}>
          <Grid.Column>
            <List>
              <text style={{ color: 'grey', fontSize: 22, fontFamily: 'Volkhov' }}>Navigate</text><hr/>
              <List.Item id="footer-AboutUs-page" as={NavLink} style={{ color: 'white' }} exact to="/about" key='about'>About Us</List.Item>
              <List.Item id="footer-random-page" as={NavLink} style={{ color: 'white' }} exact to="/random" key='random'>Go to a Random Break</List.Item>
              <List.Item id="footer-popular-page" as={NavLink} style={{ color: 'white' }} exact to="/view/Bowls" key='bowls'>Visit a Popular Break</List.Item>
              <List.Item id="footer-directory" as={NavLink} style={{ color: 'white' }} exact to="/directory" key='directory'>Break Directory</List.Item>
              <List.Item id="footer-lessons" as={NavLink} style={{ color: 'white' }} exact to="/lessons" key='directory'>Lessons</List.Item>
              <List.Item>Leave a Review</List.Item>
            </List>
          </Grid.Column>

          <Grid.Column>
            <div className="ui aligned container">
              <text style={{ color: 'grey', fontSize: 22, fontFamily: 'Volkhov' }}>Organization</text><hr/>
              Department of Information <br/> and Computer Sciences <br/>
            University of Hawaii<br/>
            Honolulu, HI 96822 <br/>
              <a href="https://surfers-spot.github.io/">Github.io Page</a>
            </div>
          </Grid.Column>

          <Grid.Column padding-left="300px">
            <List>
              <text style={{ color: 'grey', fontSize: 22, fontFamily: 'Volkhov' }}>Stay Connected</text><hr/>
              <List.Item>Want to be informed when new breaks are added?</List.Item>
              <List.Item>Enter your email below to stay informed</List.Item>
              <List.Item>
                <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
                  <Input
                    action={{
                      color: 'teal',
                      labelPosition: 'left',
                      icon: 'envelope',
                      content: 'JOIN',
                      onClick: () => swal('Success', 'Expect to hear from us soon', 'success'),
                    }}
                    actionPosition='left'
                    placeholder='Enter email address'
                  />
                </AutoForm>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
