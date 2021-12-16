import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Search } from 'semantic-ui-react';
import _ from 'lodash';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Breaks } from '../../api/break/Break';

const initialState = {
  loading: false,
  results: [],
  value: '',
};

function exampleReducer(state, action) {
  switch (action.type) {
  case 'CLEAN_QUERY':
    return initialState;
  case 'START_SEARCH':
    return { ...state, loading: true, value: action.query };
  case 'FINISH_SEARCH':
    return { ...state, loading: false, results: action.results };
  case 'UPDATE_SELECTION':
    return { ...state, value: action.selection };

  default:
    throw new Error();
  }
}
const resultRenderer = ({ name }) => <Link to={`/view/${name}`}>{name}</Link>;

function SearchBar() {
  const [state, dispatch] = React.useReducer(exampleReducer, initialState);
  const { loading, results, value } = state;
  const source = Breaks.collection.find({}).fetch();

  const timeoutRef = React.useRef();
  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current);
    dispatch({ type: 'START_SEARCH', query: data.value });

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' });
        return;
      }

      const re = new RegExp(_.escapeRegExp(data.value), 'i');
      const isMatch = (result) => re.test(result.name);

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(source, isMatch),
      });
    }, 300);
  }, []);
  React.useEffect(() => () => {
    clearTimeout(timeoutRef.current);
  }, []);

  return (
    <Search
      loading={loading}
      onResultSelect={(e, data) => dispatch({ type: 'UPDATE_SELECTION', selection: data.result.name })
      }
      onSearchChange={handleSearchChange}
      results={results}
      aligned= 'right'
      value={value}
      size = 'massive'
      resultRenderer={resultRenderer}
      placeholder="Search for Surf Spots"
    />
  );
}

export default withTracker(() => {
  // Ensure that minimongo is populated with all collections prior to running render().
  const sub1 = Meteor.subscribe(Breaks.userPublicationName);
  return {
    ready: sub1.ready(),
  };
})(SearchBar);
