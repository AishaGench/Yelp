import React, { Component } from 'react'
import "./SearchBar.css"

export default class SearchBar extends Component {
    
        sortByOptions={
            "Best Match": "best_match",
            "Highest Rated": "raiting",
            "Most Reviewed": "review_count"
        }
        renderSortByOptions(){
            return Object.keys(this.sortByOptions).map(sortByOption=>{
                    const sortByOptionValue=this.sortByOptions[sortByOption]
                    return <li key={sortByOptionValue}>{sortByOption}</li>
            })
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
          <a href='www.#.com'>Let's Go</a>
        </div>
      </div>

        )
    }
}