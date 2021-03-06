import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Header, Image } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = { backgroundColor: 'white' };
    return (

      <Menu style={menuStyle} attached="top" borderless>
        <Menu.Item id="navbar-directory" as={NavLink} activeClassName="" exact to="/directory">Directory</Menu.Item>
        <Menu.Item id="navbar-random-page" as={NavLink} activeClassName="" exact to="/random">Random</Menu.Item>
        <Menu.Item id="navbar-popular-page" as={NavLink} activeClassName="" exact to="/popular">Popular</Menu.Item>
        <Menu.Item id="navbar-lessons" as={NavLink} activeClassName="" exact to="/lessons">Lessons</Menu.Item>
        <Menu.Item id="navbar-about-us" as={NavLink} activeClassName="" exact to="/about">About Us</Menu.Item>
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
          <Menu.Item as={NavLink} id='navbar-add-break'activeClassName="active" exact to="/add-break" key='add-break'>Add Break</Menu.Item>
        ) : ''}
        <Menu.Item id="navbar-landing-page" fitted position="right" as={NavLink} activeClassName="" exact to="/">
          <Header as='h1'>Surfer&apos;s Spot</Header>
        </Menu.Item>

        <Menu.Item id="navbar-landing-page" position="left" as={NavLink} activeClassName="" exact to="/">
          <Image src='/images/Logo.png' ui={false} />
        </Menu.Item>

        <Menu.Item position="right">
          {this.props.currentUser === '' ? (
            <Dropdown id="login-dropdown" text="Login " pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item id="login-dropdown-sign-in" icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                <Dropdown.Item id="login-dropdown-sign-up" icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Dropdown id="navbar-current-user" text={this.props.currentUser} pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item id="navbar-sign-out" icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Menu.Item>
      </Menu>
    );
  }
}

// Declare the types of all properties.
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

// Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter
export default withRouter(NavBarContainer);
