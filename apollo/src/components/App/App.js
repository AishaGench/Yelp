import React from "react";
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';
  
  //  const business={
  //   imageSrc: './pizza.webp',
  //   name: 'MarginOtto Pizzeria',
  //   address: '1010 Paddington Way',
  //   city: 'Flavortown',
  //   state: 'NY',
  //   zipCode: '10101',
  //   category: 'Italian',
  //   rating: 4.5,
  //   reviewCount: 90
  //   }
  
  //   const businesses=[
  //     business.name ,business.address , business.city , business.state ,
  //     business.zipCode , business.category
  //  ]
  
  class  App extends React.Component{

    constructor(props) {
      super(props)
  
      this.state = {
           businesses: []
      }
      this.searchYelp = this.searchYelp.bind(this)
  }
  
    searchYelp(term,location,sortBy){
      // console.log(`Searching Yelp ${term}, ${location}, ${sortBy}`)
      Yelp.search(term, location,sortBy)
      .then((businesses)=>this.setState({
        businesses:businesses
      }))
  
    }
  
    render(){
  
    return (
      <div className="App">
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses}/>
        
      </div>
    );
  }
}

  export default App;
  
