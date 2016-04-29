import React, { Component } from 'react';

// define a new class called searchbar with functionality from React.Component class
class SearchBar extends Component{
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange={ event => this.onInputChange(event.target.value) }
        />
        Value of the input: {this.state.term}
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
export default SearchBar;
