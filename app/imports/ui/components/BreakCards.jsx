import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import swal from 'sweetalert';
import { Roles } from 'meteor/alanning:roles';
import { Breaks } from '../../api/break/Break';

/** Renders a card of a break from the Breaks collection. */
class BreakCard extends React.Component {

  delete(id) {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this break!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          Breaks.collection.remove(id);
          swal('Break Successfully Deleted', {
            icon: 'success',
          });
        } else {
          swal('Successfully Cancelled.');
        }
      });
  }

  render() {
    return (
      <Card id={`${this.props.break.name}-card`}>
        <Image className='cardImage' fluid src={this.props.break.image}/>
        <Card.Content>
          <Card.Header>{this.props.break.name}</Card.Header>
          <Card.Meta>{this.props.break.location}</Card.Meta>
          {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
            <Card.Meta id="views">Views - {this.props.break.viewed}</Card.Meta>
          ) : ''}
        </Card.Content>
        <Card.Content extra>
          <Card.Header>Difficulty: {this.props.break.difficulty}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/view/${this.props.break.name}`} id={`${this.props.break.name}-view`}>View Break</Link>
        </Card.Content>
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
          <Card.Content extra>
            <Link to={`/edit/${this.props.break._id}`} id={`${this.props.break.name}-edit`}>Edit</Link>
          </Card.Content>
        ) : ''}
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
          <Card.Content extra>
            <Button basic onClick={this.delete.bind(this, this.props.break._id)} id={`${this.props.break.name}-delete`}> Delete </Button>
          </Card.Content>
        ) : ''}
      </Card>
    );
  }
}

// Require a document to be passed to this component.
BreakCard.propTypes = {
  break: PropTypes.object.isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(BreakCard);
