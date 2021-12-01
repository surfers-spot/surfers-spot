import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class BreakCard extends React.Component {
  render() {
    return (
      <Card>
        <Image className='cardImage' fluid src={this.props.break.image}/>
        <Card.Content>
          <Card.Header>{this.props.break.name}</Card.Header>
          <Card.Meta>{this.props.break.location}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Card.Header>Difficulty: {this.props.break.difficulty}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/view/${this.props.break.name}`}>View Break</Link>
        </Card.Content>
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
