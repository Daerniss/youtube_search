import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return(
      <div className="row search-bar">
        <input
          placeholder="search.."
          value={this.state.term}
          onChange={ event => this.handlerInputChange(event.target.value) }
        />
      </div>
    );
  }

  handlerInputChange(term) {
    this.setState({term});
    this.props.handlerSearchTermChange(term);
  }

}

export default SearchBar;
