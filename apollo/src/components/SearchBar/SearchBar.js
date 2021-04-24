import React, { Component } from 'react'


export default class SearchBar extends Component {
    sortByOptions = {
        'Best Match':'best_match',
        'Highest Rated':'highest_rated',
        'Most Reviewed': 'most_reviewed'
    }
    render() {
        return (
            <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a href='www.#.com' >Let's Go</a>
        </div>
      </div>

        )
    }
}
